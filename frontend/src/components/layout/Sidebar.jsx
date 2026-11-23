import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  TrendingUp,
  FileBarChart,
  Users,
  Settings,
  BarChart3,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Sales", icon: ShoppingCart },
  { name: "Products", icon: Package },
  { name: "Forecasting", icon: TrendingUp },
  { name: "Reports", icon: FileBarChart },
  { name: "User Management", icon: Users },
  { name: "Settings", icon: Settings },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg bg-sidebar p-3 text-white shadow-lg lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar text-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-700 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <BarChart3 size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold">SmartBiz</h1>
              <p className="text-xs text-slate-400">
                Business Intelligence
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Main Menu
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeItem === item.name
                    ? "bg-primary text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-700 p-4">
          <div className="mb-4 rounded-lg bg-slate-800 p-3">
            <p className="text-sm font-medium">Demo Workspace</p>
            <p className="text-xs text-slate-400">
              Development Mode
            </p>
          </div>

          <button
            type="button"
            disabled
            title="Logout will be enabled after authentication setup"
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-500"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;