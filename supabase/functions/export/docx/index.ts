import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.2';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, serviceKey);

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  const { verse_id, lenses } = await req.json();
  const { data: verse } = await supabase.from('verses').select('*').eq('id', verse_id).single();

  const fileContent = JSON.stringify({ verse, lenses, format: 'docx' }, null, 2);
  const buffer = new TextEncoder().encode(fileContent);
  const fileName = `verso-${verse_id}-${Date.now()}.docx`;

  await supabase.storage.from('exports').upload(fileName, buffer, {
    contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    upsert: true,
  });

  const { data: urlData } = await supabase.storage.from('exports').createSignedUrl(fileName, 60 * 60);

  return new Response(JSON.stringify({ url: urlData?.signedUrl }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
