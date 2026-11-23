// Temporary demo data for UI development.
// All monetary values are in Sri Lankan Rupees (LKR).

export const monthlySalesData = [
  { month: "Jan", revenue: 520000, profit: 125000 },
  { month: "Feb", revenue: 680000, profit: 175000 },
  { month: "Mar", revenue: 610000, profit: 155000 },
  { month: "Apr", revenue: 820000, profit: 210000 },
  { month: "May", revenue: 960000, profit: 245000 },
  { month: "Jun", revenue: 1250000, profit: 325000 },
];

export const formatLKR = (value) => {
  return new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(value);
};