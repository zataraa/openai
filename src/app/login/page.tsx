'use client';

import { supabaseBrowser } from '@/lib/supabase/browser';

export default function LoginPage() {
  const handleLogin = async () => {
    await supabaseBrowser.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'openid email profile',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1>Acceso institucional</h1>
      <p>El acceso está limitado a cuentas verificadas mediante Google Workspace.</p>
      <button
        type="button"
        onClick={handleLogin}
        style={{
          borderRadius: 999,
          padding: '0.75rem 2rem',
          background: '#0f172a',
          color: '#fff',
          border: 'none',
          fontSize: '1rem',
        }}
      >
        Acceder con Google
      </button>
    </div>
  );
}
