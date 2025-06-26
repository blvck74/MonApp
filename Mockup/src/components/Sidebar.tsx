import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Wrench,
  AlertTriangle,
  ArrowLeftRight,
  Building2,
  Package,
  MessageCircle,
  FileText,
  Settings,
  Bell,
  Sun,
  Moon,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "works", label: "Works", icon: Wrench, path: "/works" },
  {
    id: "accidents",
    label: "Accidents",
    icon: AlertTriangle,
    path: "/accidents",
  },
  {
    id: "shift-handover",
    label: "Shift Handover",
    icon: ArrowLeftRight,
    path: "/shift-handover",
  },
  {
    id: "geo-department",
    label: "GEO Department",
    icon: Building2,
    path: "/geo-department",
  },
  { id: "storage", label: "Storage", icon: Package, path: "/storage" },
  {
    id: "operational-communication",
    label: "Operational Communication",
    icon: MessageCircle,
    path: "/operational-communication",
  },
  { id: "notes", label: "Notes", icon: FileText, path: "/notes" },
  {
    id: "parameters",
    label: "Parameters",
    icon: Settings,
    path: "/parameters",
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [notifications] = useState(3); // Mock notification count

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return path !== "/" && location.pathname.startsWith(path);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold text-sidebar-foreground">
          Monitoring System
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground",
                active &&
                  "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        {/* User Info */}
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            <User size={16} className="text-sidebar-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Ivan Ivanov
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              Shift Supervisor
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-9 w-9 p-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground relative"
          >
            <Bell size={16} />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Button>
        </div>
      </div>
    </aside>
  );
}
