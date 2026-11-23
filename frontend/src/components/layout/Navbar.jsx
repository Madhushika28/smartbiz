import { Bell, Search, ChevronDown, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 lg:px-8">
      {/* Page Information */}
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400">
          SmartBiz / Overview
        </p>
        <h2 className="mt-1 text-xl font-bold text-slate-900">
          Dashboard
        </h2>
      </div>

      {/* Navbar Actions */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search — enabled later */}
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 xl:flex">
          <Search size={17} className="text-slate-400" />
          <span className="text-sm text-slate-400">
            Search (coming soon)
          </span>
        </div>

        {/* Notifications — enabled later */}
        <span
          title="Notifications coming soon"
          className="rounded-lg p-2 text-slate-400"
        >
          <Bell size={20} />
        </span>

        {/* Demo User */}
        <div className="flex items-center gap-2 border-l border-slate-200 pl-3 sm:pl-5">
          <UserCircle size={34} className="text-primary" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Demo User
            </p>
            <p className="text-xs text-slate-500">
              Preview Mode
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-slate-400 sm:block"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;