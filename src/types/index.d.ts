import { z } from "zod";
import { ZStockAvarageCalculator } from "@/zod/index";

export type TData = {
  title: string;
  url: string;
};

export type TStockMarketAverageCalculatorPage = {
  amountInvertedInFirstPurchase: number;
  amountInvertedInSecondPurchase: number;
  totalUnits: number;
  totalAmount: number;
  averagePrice: number;
};

export type TStockAvarageCalculator = z.infer<typeof ZStockAvarageCalculator>;
