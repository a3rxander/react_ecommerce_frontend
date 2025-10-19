import { Outlet, NavLink } from "react-router";
import {useNavigate} from "react-router";
import {useAuth} from "@/app/hooks/useAuth";
import {
  Button,
} from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart2,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  UserCircle,
} from "lucide-react";
import { useState } from "react";

export default function SellerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    console.debug("Logging out user");
    await logout();
    navigate("/login");
  };

  const navItems = [
    { to: "/seller/orders", label: "Orders", icon: ShoppingCart },
    { to: "/seller/products", label: "Products", icon: Package },
    { to: "/seller/analytics", label: "Analytics", icon: BarChart2 },
    { to: "/seller/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/40 text-foreground">
      {/* Header */}
      <header className="h-16 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold tracking-tight">
            Seller Dashboard
          </h1>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <UserCircle className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Seller Name
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2"   />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 w-64 bg-background border-r shadow-sm p-4 z-30 transform transition-transform duration-200 ease-in-out 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <nav className="space-y-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground mt-6 px-3">
            © 2025 My E-commerce Seller
          </p>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Optional breadcrumb */}
            <div className="text-sm text-muted-foreground">
              Dashboard / Overview
            </div>

            <Card className="p-6 shadow-sm bg-background border border-border/50 rounded-2xl">
              <Outlet />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
