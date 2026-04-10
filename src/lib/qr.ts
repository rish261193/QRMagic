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
