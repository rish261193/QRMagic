import { supabase } from './supabase';

export interface QRCode {
  id: string;
  user_id: string;
  name: string;
  url: string;
  style: string;
  created_at: string;
  scan_count: number;
}

export interface QRDetails {
  url: string;
  email_capture: boolean;
  owner_id: string;
}

export async function saveQR(params: { name: string; url: string; style: string; user_id: string }) {
  const { data, error } = await supabase
    .from('qr_codes')
    .insert([params])
    .select()
    .single();
  return { data: data as QRCode | null, error };
}

export async function fetchQRs() {
  const { data, error } = await supabase
    .from('qr_codes')
    .select('*')
    .order('created_at', { ascending: false });
  return { data: data as QRCode[] | null, error };
}

export async function deleteQR(id: string) {
  const { error } = await supabase.from('qr_codes').delete().eq('id', id);
  return { error };
}

export async function renameQR(id: string, name: string) {
  const { error } = await supabase
    .from('qr_codes')
    .update({ name })
    .eq('id', id);
  return { error };
}

export async function getQRUrl(id: string): Promise<string | null> {
  const { data } = await supabase.rpc('get_qr_url', { qr_id: id });
  return data as string | null;
}

export async function trackScan(id: string) {
  await supabase.rpc('increment_scan', { qr_id: id });
}

export async function updateQRUrl(id: string, url: string) {
  const { error } = await supabase
    .from('qr_codes')
    .update({ url })
    .eq('id', id);
  return { error };
}

/**
 * Calls the get_qr_details security-definer RPC.
 * Falls back to URL-only if RPC is not yet deployed.
 */
export async function getQRDetails(id: string): Promise<QRDetails | null> {
  const { data, error } = await supabase.rpc('get_qr_details', { qr_id: id });
  if (!error && data) return data as QRDetails;
  // RPC not available yet — fall back to URL only (no email capture)
  const url = await getQRUrl(id);
  if (!url) return null;
  return { url, email_capture: false, owner_id: '' };
}

/** Inserts an email capture via security-definer RPC. */
export async function captureEmailLead(
  qr_id: string,
  email: string,
): Promise<{ error: Error | null }> {
  const { error } = await supabase.rpc('capture_email_lead', {
    p_qr_id: qr_id,
    p_email: email,
  });
  return { error: error as Error | null };
}
