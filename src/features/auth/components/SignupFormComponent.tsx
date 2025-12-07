import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {Link, useNavigate} from "react-router"
import { authService } from "../services/authService"
import type { SignupData } from "../types/AuthTypes"
import { useState } from "react"

export function SignupFormComponent() {
  const navigate = useNavigate()
  const roles = ["Customer","Seller"];
  const [formData, setFormData] =   useState<SignupData>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: roles[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => 
    {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await authService.singnup(formData);
        navigate("/login");
      } catch (error) {
        console.error("Signup failed:", error);
      }
    };
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your data below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstName">FirstName</FieldLabel>
                <Input id="firstName" name="firstName" value={formData.firstName} 
                onChange={handleChange} type="text" placeholder="John"  required />
              </Field>
              
              <Field>
                <FieldLabel htmlFor="lastName">lastName</FieldLabel>
                <Input id="lastName" name="lastName" value={formData.lastName} 
                onChange={handleChange} type="text" placeholder="John"  required />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  name="username"
                  value={formData.username} 
                  onChange={handleChange}
                  type="text"
                  placeholder="aaaaaa"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  value={formData.email} 
                  onChange={handleChange}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field> 
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     type="password" required />
                  </Field> 
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription> 
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  ); 

}
