import { supabase } from './supabase';

export type Plan = 'free' | 'pro' | 'growth';

export interface Profile {
  id: string;
  plan: Plan;
  stripe_customer_id: string | null;
  updated_at: string;
}

export async function fetchProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data: data as Profile | null, error };
}

// Creates a free profile if the user pre-dates the trigger
export async function ensureProfile(userId: string): Promise<Plan> {
  const { data } = await fetchProfile(userId);
  if (data) return data.plan;
  await supabase.from('profiles').insert({ id: userId });
  return 'free';
}
