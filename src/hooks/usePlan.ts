import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ensureProfile, type Plan } from '../lib/profile';

export interface UsePlanResult {
  plan: Plan;
  isLoading: boolean;
  isPro: boolean;
  isGrowth: boolean;
  isFree: boolean;
  refetch: () => void;
}

// Module-level cache so repeated renders don't re-fetch
const planCache = new Map<string, Plan>();

export function usePlan(): UsePlanResult {
  const { user } = useAuth();
  const [plan, setPlan] = useState<Plan>('free');
  const [isLoading, setIsLoading] = useState(true);

  function load() {
    if (!user) {
      setIsLoading(false);
      return;
    }
    const cached = planCache.get(user.id);
    if (cached !== undefined) {
      setPlan(cached);
      setIsLoading(false);
      return;
    }
    ensureProfile(user.id).then(p => {
      planCache.set(user.id, p);
      setPlan(p);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    load();
  }, [user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    plan,
    isLoading,
    isPro: plan === 'pro' || plan === 'growth',
    isGrowth: plan === 'growth',
    isFree: plan === 'free',
    refetch: () => {
      if (user) {
        planCache.delete(user.id);
        setIsLoading(true);
        load();
      }
    },
  };
}
