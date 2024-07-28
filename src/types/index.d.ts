import React from "react";
import { z } from "zod";
import { ZStockAvarageCalculator, ZSipCalculator } from "@/zod/index";

export type TData = {
  title: string;
  url: string;
  className?: string;
  icon?: React.JSX.Element;
  backgroundImageUrl?: string;
};

export type TChartData = {
  key: string;
  value: number;
  fill: string;
};

export type TStockMarketAverageCalculatorPage = {
  amountInvertedInFirstPurchase: number;
  amountInvertedInSecondPurchase: number;
  totalUnits: number;
  totalAmount: number;
  averagePrice: number;
};

export type TStockAvarageCalculator = z.infer<typeof ZStockAvarageCalculator>;

export type TSipCalculatorPage = {
  expectedAmount: number;
  amountInvested: number;
};

export type TSipCalculator = z.infer<typeof ZSipCalculator>;
