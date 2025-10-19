 import {useAuth} from "@/app/hooks/useAuth";
 import { useNavigate } from "react-router";
 import { useEffect } from "react";


export default function HomePage() { 
  
  const {authState, user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Auth State:", authState);
    console.log("User:", user);
    if (authState !== "authenticated" || !user) {
      navigate("/login");
    }

    if(user?.role === "Seller") {
      navigate("/seller/products");
    } else if(user?.role === "Customer") {
      navigate("/products");
    }else if(user?.role === "Admin") {
      navigate("/admin/dashboard");
    }
  }, []);

  return null; // Prevent rendering while redirecting
}