import { z } from "zod";

export const ZStockAvarageCalculator = z.object({
  first_purchase_unit: z.coerce
    .number()
    .positive("Units cannot be empty and must be grater than 0."),
  first_purchase_price: z.coerce
    .number()
    .positive("Price cannot be empty and must be grater than 0."),
  second_purchase_unit: z.coerce
    .number()
    .positive("Units cannot be empty and must be grater than 0."),
  second_purchase_price: z.coerce
    .number()
    .positive("Price cannot be empty and must be grater than 0."),
});

export const ZSipCalculator = z.object({
  monthlyInvestmentAmount: z.coerce
    .number()
    .positive("Amount cannot be empty and must be grater than 0."),
  investmentPeriodInYears: z.coerce
    .number()
    .positive("Period cannot be empty and must be grater than 0."),
  expectedAnnualReturns: z.coerce
    .number()
    .positive("Returns cannot be empty and must be grater than 0."),
  yearlyIncreaseInMonthlyInvestment: z.coerce
    .number()
    .gte(0, "Yearly Increase in Monthly Investment cannot be empty.")
    .optional(),
});
