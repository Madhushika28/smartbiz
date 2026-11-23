
/**
 * Demo product performance data.
 * All monetary values are in Sri Lankan Rupees (LKR).
 *
 * Replace with FastAPI responses during backend integration.
 */

export const productPerformanceData = [
  {
    id: 1,
    name: "Wireless Mouse",
    sku: "PRD-001",
    category: "Accessories",
    unitsSold: 420,
    revenue: 1260000,
    grossProfit: 420000,
  },
  {
    id: 2,
    name: "USB-C Cable",
    sku: "PRD-002",
    category: "Accessories",
    unitsSold: 380,
    revenue: 570000,
    grossProfit: 190000,
  },
  {
    id: 3,
    name: "Laptop Stand",
    sku: "PRD-003",
    category: "Office Equipment",
    unitsSold: 310,
    revenue: 1550000,
    grossProfit: 465000,
  },
  {
    id: 4,
    name: "Wireless Keyboard",
    sku: "PRD-004",
    category: "Accessories",
    unitsSold: 275,
    revenue: 1100000,
    grossProfit: 330000,
  },
  {
    id: 5,
    name: "USB Hub",
    sku: "PRD-005",
    category: "Electronics",
    unitsSold: 240,
    revenue: 960000,
    grossProfit: 288000,
  },
];

// Sort products by quantity sold in descending order.
export const getTopSellingProducts = (products, limit = 5) => {
  return [...products]
    .sort((a, b) => b.unitsSold - a.unitsSold)
    .slice(0, limit);
};
