import { FormEvent, useState } from "react";
import { NavigateOptions, useLocation, useNavigate } from "react-router";

import useAuth from "@/app/hooks/useAuth";

const roleRedirectMap: Record<string, string> = {
  admin: "/admin/users",
  seller: "/seller/products",
  customer: "/",
};

type LocationState = {
  from?: string;
  navigationOptions?: NavigateOptions;
} | undefined;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const authenticatedUser = await login(email, password);
      const state = location.state as LocationState;
      const redirectPath =
        state?.from ?? roleRedirectMap[authenticatedUser.role] ?? "/";
      navigate(redirectPath, { replace: true, ...state?.navigationOptions });
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Ocurrió un error al iniciar sesión.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 rounded-md border border-gray-200 p-6 shadow-sm">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Iniciar sesión</h1>
        <p className="text-sm text-gray-500">
          Usa las credenciales de demostración para acceder al panel.
        </p>
      </header>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1 text-left text-sm font-medium text-gray-700">
          Correo electrónico
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="admin@test.com"
            autoComplete="email"
          />
        </label>

        <label className="flex flex-col gap-1 text-left text-sm font-medium text-gray-700">
          Contraseña
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="1234"
            autoComplete="current-password"
          />
        </label>

        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </button>
      </form>

      <section className="space-y-1 rounded-md bg-gray-50 p-3 text-xs text-gray-600">
        <h2 className="font-semibold">Credenciales de prueba</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <span className="font-medium">Admin:</span> admin@test.com / 1234
          </li>
          <li>
            <span className="font-medium">Cliente:</span> user@test.com / 1234
          </li>
        </ul>
      </section>
    </div>
  );
}
