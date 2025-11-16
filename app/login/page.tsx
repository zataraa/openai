import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 text-center">
      <h1 className="text-2xl font-semibold text-amber-800">Acceso a la Biblioteca</h1>
      <p className="text-sm text-slate-600">
        El ingreso se realiza exclusivamente con Google (OAuth2: openid email profile). En esta fase el servicio es gratuito, pero
        ya está preparado para habilitar pagos en el futuro.
      </p>
      <form action="/api/auth/login-google" method="get">
        <button className="w-full rounded-full bg-amber-700 px-5 py-3 font-semibold text-white" type="submit">
          Acceder con Google
        </button>
      </form>
      <p className="text-xs text-slate-500">
        Al continuar aceptas la política de privacidad y el límite de 3 búsquedas diarias. <Link href="/">Volver al inicio</Link>.
      </p>
    </div>
  );
}
