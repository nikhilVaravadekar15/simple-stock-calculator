import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple-stock-calculator",
  description:
    "This application allows to calculate stock average on entering first and second buy details. A stock average calculator is a tool used to calculate the average value of a list of stock prices.",
  keywords:
    "Indian Systematic Withdrawal Plan, USA Systematic Withdrawal Plan, US Systematic Withdrawal Plan, Japan stock market average-calculator, Australia Systematic Withdrawal Plan. average calculator, stock calculator, percentage calculator,  cash and carry calculator, Stock prices, Average, Calculation, Performance, Investors, Time period, Investment decisions, Spreadsheet, Software program, Stock charting, Technical analysis, Analyzing, Comparison, Investment performance, Stock market.",
  icons: [
    {
      rel: "icon",
      fetchPriority: "high",
      url: "favicon.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-y-scroll">{children}</body>
    </html>
  );
}
