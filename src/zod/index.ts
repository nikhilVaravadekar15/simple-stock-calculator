import { z } from "zod";

export const ZStockAvarageCalculator = z.object({
  first_purchase_unit: z.coerce
    .number()
    .positive("Units cannot be empty and must be grater than zero."),
  first_purchase_price: z.coerce
    .number()
    .positive("Price cannot be empty and must be grater than zero."),
  second_purchase_unit: z.coerce
    .number()
    .positive("Units cannot be empty and must be grater than zero."),
  second_purchase_price: z.coerce
    .number()
    .positive("Price cannot be empty and must be grater than zero."),
});
