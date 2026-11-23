
import { Package, Trophy } from "lucide-react";

import { formatLKR } from "./salesData";

import {
  productPerformanceData,
  getTopSellingProducts,
} from "./productData";

function ProductPerformance({
  products = productPerformanceData,
}) {
  const topProducts = getTopSellingProducts(products, 5);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-6">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-50 p-3 text-primary">
            <Package size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Top-Selling Products
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Ranked by total units sold
            </p>
          </div>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
          Demo Data
        </span>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-190 text-left text-sm">

          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                Rank
              </th>

              <th scope="col" className="px-6 py-4">
                Product
              </th>

              <th scope="col" className="px-6 py-4">
                Category
              </th>

              <th scope="col" className="px-6 py-4 text-right">
                Units Sold
              </th>

              <th scope="col" className="px-6 py-4 text-right">
                Revenue (LKR)
              </th>

              <th scope="col" className="px-6 py-4 text-right">
                Gross Profit (LKR)
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">

            {topProducts.map((product, index) => (
              <tr
                key={product.id}
                className="transition-colors hover:bg-slate-50"
              >

                {/* Ranking */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {index === 0 && (
                      <Trophy
                        size={17}
                        className="text-amber-500"
                      />
                    )}

                    <span className="font-semibold text-slate-700">
                      #{index + 1}
                    </span>
                  </div>
                </td>

                {/* Product */}
                <td className="px-6 py-4">
                  <p className="font-semibold text-slate-800">
                    {product.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {product.sku}
                  </p>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {product.category}
                  </span>
                </td>

                {/* Units */}
                <td className="px-6 py-4 text-right font-medium tabular-nums text-slate-700">
                  {product.unitsSold.toLocaleString("en-LK")}
                </td>

                {/* Revenue */}
                <td className="px-6 py-4 text-right font-medium tabular-nums text-slate-800">
                  {formatLKR(product.revenue)}
                </td>

                {/* Gross Profit */}
                <td className="px-6 py-4 text-right font-semibold tabular-nums text-green-600">
                  {formatLKR(product.grossProfit)}
                </td>

              </tr>
            ))}

            {topProducts.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-slate-500"
                >
                  No product data available.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
        <p className="text-xs text-slate-500">
          Showing the top {topProducts.length} products by units sold.
          Financial values are displayed in LKR.
        </p>
      </div>

    </section>
  );
}

export default ProductPerformance;
