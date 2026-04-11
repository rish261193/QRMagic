import { supabase } from './supabase';

export interface EmailCapture {
  id: string;
  qr_id: string;
  email: string;
  captured_at: string;
  qr_codes: { name: string } | null;
}

export async function fetchEmailCaptures() {
  const { data, error } = await supabase
    .from('email_captures')
    .select('id, qr_id, email, captured_at, qr_codes(name)')
    .order('captured_at', { ascending: false });
  return { data: data as EmailCapture[] | null, error };
}

export function exportEmailCapturesCSV(captures: EmailCapture[]): void {
  const rows = [
    ['Email', 'QR Code', 'Date Captured'],
    ...captures.map(c => [
      c.email,
      c.qr_codes?.name ?? c.qr_id,
      new Date(c.captured_at).toLocaleString(),
    ]),
  ];
  const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'qrcraft-email-captures.csv';
  a.click();
  URL.revokeObjectURL(url);
}
