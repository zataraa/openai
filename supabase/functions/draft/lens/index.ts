import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.2';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, serviceKey);

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  const { verse_id, lens } = await req.json();
  const { data: verse } = await supabase.from('verses').select('*').eq('id', verse_id).single();
  const { data: glossary } = await supabase.from('symbols').select('*').limit(10);

  const draft = {
    verse,
    lens,
    thesis: 'Borrador generado (IA desactivada por defecto).',
    body_md: 'Integre datos de glosario y paralelos manualmente antes de publicar.',
    citations: [],
  };

  return new Response(JSON.stringify({ draft, glossary }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
