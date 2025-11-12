"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  Users,
  BarChart3,
  Shield,
  Puzzle,
  Gift,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "My Forms", href: "/dashboard/my-forms" },
  { icon: ClipboardList, label: "My Surveys", href: "/dashboard/my-surveys" },
  { icon: Users, label: "Contacts", href: "/dashboard/contacts" },
  { icon: BarChart3, label: "Usage and Analytics", href: "/dashboard/analytics" },
  { icon: Shield, label: "Team Members", href: "/dashboard/team-member" },
  { icon: Puzzle, label: "Integrations", href: "/dashboard/integrations" },
];

const bottomItems = [
  { icon: Gift, label: "Referral", href: "/dashboard/referral" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm p-4 flex flex-col justify-between">
        <div>

          <h1 className="text-xl font-semibold mb-6">Form Server</h1>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-purple-100 text-purple-600 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="space-y-2 gap-10 border-t pt-4">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-purple-100 text-purple-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
