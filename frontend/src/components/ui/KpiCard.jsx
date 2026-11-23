import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function KpiCard({
  title,
  value,
  change,
  icon: Icon,
  color = "blue",
}) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  const isPositive = change >= 0;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        <div
          className={`rounded-xl p-3 ${
            colorStyles[color] || colorStyles.blue
          }`}
        >
          <Icon size={22} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span
          className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {Math.abs(change)}%
        </span>

        <span className="text-xs text-slate-400">
          vs previous month
        </span>
      </div>
    </article>
  );
}

export default KpiCard;