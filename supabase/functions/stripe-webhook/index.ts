// Supabase Edge Function: stripe-webhook
// Deploy with: supabase functions deploy stripe-webhook
//
// Required env vars (set in Supabase dashboard → Edge Functions):
//   STRIPE_SECRET_KEY
//   STRIPE_WEBHOOK_SECRET
//   SUPABASE_URL (auto-set)
//   SUPABASE_SERVICE_ROLE_KEY (auto-set)

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@14?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

serve(async (req: Request) => {
  const signature = req.headers.get('Stripe-Signature');
  if (!signature) {
    return new Response('Missing Stripe-Signature header', { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    );
  } catch (err) {
    return new Response(`Webhook signature verification failed: ${(err as Error).message}`, {
      status: 400,
    });
  }

  try {
    const { type, data } = event;

    // One-time payment for Editable QR Kit → set plan = 'pro'
    if (type === 'payment_intent.succeeded') {
      const pi = data.object as Stripe.PaymentIntent;
      const customerId = typeof pi.customer === 'string' ? pi.customer : null;
      if (customerId) {
        await supabase
          .from('profiles')
          .update({ plan: 'pro', stripe_customer_id: customerId })
          .eq('stripe_customer_id', customerId);
      }
    }

    // Subscription created or updated → set plan = 'growth' (or 'free' if inactive)
    if (
      type === 'customer.subscription.created' ||
      type === 'customer.subscription.updated'
    ) {
      const sub = data.object as Stripe.Subscription;
      const customerId = typeof sub.customer === 'string' ? sub.customer : null;
      if (customerId) {
        const isActive = ['active', 'trialing'].includes(sub.status);
        await supabase
          .from('profiles')
          .update({
            plan: isActive ? 'growth' : 'free',
            stripe_customer_id: customerId,
          })
          .eq('stripe_customer_id', customerId);
      }
    }

    // Subscription cancelled → revert to free
    if (type === 'customer.subscription.deleted') {
      const sub = data.object as Stripe.Subscription;
      const customerId = typeof sub.customer === 'string' ? sub.customer : null;
      if (customerId) {
        await supabase
          .from('profiles')
          .update({ plan: 'free' })
          .eq('stripe_customer_id', customerId);
      }
    }
  } catch (err) {
    console.error('Error processing webhook:', err);
    return new Response('Internal error', { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
