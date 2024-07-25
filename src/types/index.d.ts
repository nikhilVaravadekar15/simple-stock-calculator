import { z } from "zod";
import { ZStockAvarageCalculator } from "@/zod/index";

export type TData = {
  title: string;
  url: string;
};

export type TStockAvarageCalculator = z.infer<typeof ZStockAvarageCalculator>;
