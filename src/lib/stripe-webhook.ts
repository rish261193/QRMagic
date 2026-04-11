// Stripe webhook handler — server-side implementation pending.
//
// When ready, deploy a Supabase Edge Function at:
//   supabase/functions/stripe-webhook/index.ts
//
// It should:
//   1. Verify the Stripe-Signature header using STRIPE_WEBHOOK_SECRET
//   2. On checkout.session.completed → update profiles.plan to 'pro' or 'growth'
//      based on the price ID in the session
//   3. Store stripe_customer_id on the profile for future lookups
//
// Required env vars (set in Supabase dashboard → Edge Functions):
//   STRIPE_SECRET_KEY
//   STRIPE_WEBHOOK_SECRET
//   SUPABASE_SERVICE_ROLE_KEY
//
// The /upgrade/success page handles the post-payment UX client-side
// (auto-redirect to /dashboard after 3 seconds).

export {};
