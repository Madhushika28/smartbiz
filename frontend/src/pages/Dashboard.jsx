
import {
  Wallet,
  TrendingUp,
  ShoppingCart,
  Package,
  Clock3,
} from "lucide-react";

import KpiCard from "../components/ui/KpiCard";
import SalesChart from "../features/analytics/SalesChart";
import ProductPerformance from "../features/analytics/ProductPerformance";

// Temporary demo data.
// Replace with real API data during backend integration.
const dashboardMetrics = [
  {
    title: "Total Revenue",
    value: "Rs. 1,250,000",
    change: 12.5,
    icon: Wallet,
    color: "blue",
  },
  {
    title: "Gross Profit",
    value: "Rs. 325,000",
    change: 8.2,
    icon: TrendingUp,
    color: "green",
  },
  {
    title: "Total Orders",
    value: "1,248",
    change: 5.4,
    icon: ShoppingCart,
    color: "purple",
  },
  {
    title: "Products Sold",
    value: "3,560",
    change: -2.1,
    icon: Package,
    color: "orange",
  },
];

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Page Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Business Overview
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your business performance and sales trends.
          </p>
        </div>

        <span className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Demo Data
        </span>
      </div>

      {/* KPI Cards */}
      <section
        aria-label="Key performance indicators"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {dashboardMetrics.map((metric) => (
          <KpiCard
            key={metric.title}
            {...metric}
          />
        ))}
      </section>

      {/* Sales Analytics and Forecast Section */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Interactive Sales Chart */}
        <div className="min-w-0 xl:col-span-2">
          <SalesChart />
        </div>

        {/* Sales Forecast Preview */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp
              className="text-primary"
              size={22}
            />

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Sales Forecast
              </h2>

              <p className="text-sm text-slate-500">
                AI-powered business predictions
              </p>
            </div>
          </div>

          <div className="flex min-h-80 flex-col items-center justify-center rounded-xl bg-blue-50 p-6 text-center">
            <Clock3
              size={38}
              className="text-blue-400"
            />

            <h3 className="mt-4 font-semibold text-slate-800">
              Forecasting Module
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Machine learning predictions will be
              available after historical sales data
              integration.
            </p>

            <span className="mt-5 rounded-full bg-white px-4 py-2 text-xs font-medium text-blue-600">
              Coming Soon
            </span>
          </div>
        </div>

      </section>

      {/* Top-Selling Products Section */}
      <section aria-label="Product performance analysis">
        <ProductPerformance />
      </section>

    </div>
  );
}

export default Dashboard;
