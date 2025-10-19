import { useState } from "react";
import { Link, useNavigate  } from "react-router";
import { useAuth } from "@/app/hooks/useAuth";
import type { LoginCredentials } from "../types/AuthTypes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginComponent() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const mockUser=['administrator','seller','customer'];


  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "Panama!2025##",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(credentials);
      setIsLoading(false);
      navigate("/");


      // Aquí podrías redirigir o guardar el usuario en contexto
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                 {mockUser.length > 0 && (
                <Field>
                  <FieldLabel htmlFor="mock">Mock Users (for testing)</FieldLabel>
                  <select
                    id="mock"
                    name="username"
                    className="border rounded p-2 w-full"
                    value={credentials.username}
                    onChange={handleChange2}
                  >
                    <option value="">Select user</option>
                    {mockUser.map((user) => (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    ))}
                  </select>
                </Field>
              )}
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="aaaaaa"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
 
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
