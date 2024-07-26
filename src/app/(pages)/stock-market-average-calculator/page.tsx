"use client";
import {
  TStockAvarageCalculator,
  TStockMarketAverageCalculatorPage,
} from "@/types";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ZStockAvarageCalculator } from "@/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import CredenzaPopUp from "@/components/CredenzaPopUp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StockMarketAverageCalculatorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TStockAvarageCalculator>({
    resolver: zodResolver(ZStockAvarageCalculator),
  });

  const [open, setOpen] = React.useState<boolean>(false);
  const [
    stockMarketAverageCalculatedData,
    setStockMarketAverageCalculatedData,
  ] = React.useState<TStockMarketAverageCalculatorPage | null>(null);

  const onSubmit = (data: TStockAvarageCalculator) => {
    console.log(data);
    const amountInvertedInFirstPurchase =
      data.first_purchase_unit * data.first_purchase_price;
    const amountInvertedInSecondPurchase =
      data.second_purchase_unit * data.second_purchase_price;
    const totalUnits = data.first_purchase_unit + data.second_purchase_unit;
    const totalAmount =
      amountInvertedInFirstPurchase + amountInvertedInSecondPurchase;
    const averagePrice = totalAmount / totalUnits;

    setStockMarketAverageCalculatedData({
      amountInvertedInFirstPurchase: amountInvertedInFirstPurchase,
      amountInvertedInSecondPurchase: amountInvertedInSecondPurchase,
      totalUnits: totalUnits,
      totalAmount: totalAmount,
      averagePrice: averagePrice,
    });
    setOpen(true);
  };

  return (
    <Card className="w-full md:w-[512px]">
      <CardHeader>
        <CardTitle>Stock market average calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4 mb-4">
            <span className="text-sm font-semibold">First Purchase</span>
            <div className="mb-2 h-28 flex flex-col space-y-1.5 md:h-[72px]">
              <Label>Units</Label>
              <Input
                type="any"
                {...register("first_purchase_unit", {
                  required: true,
                })}
              />
              <span className="text-red-600">
                <ErrorMessage errors={errors} name="first_purchase_unit" />
              </span>
            </div>
            <div className="h-28 flex flex-col space-y-1.5 md:h-[72px]">
              <Label>Price per share</Label>
              <Input
                type="any"
                {...register("first_purchase_price", {
                  required: true,
                })}
              />
              <span className="text-red-600">
                <ErrorMessage errors={errors} name="first_purchase_price" />
              </span>
            </div>
          </div>
          <div className="grid w-full items-center gap-4 mb-4">
            <span className="text-sm font-semibold">Second Purchase</span>
            <div className="mb-2 h-28 flex flex-col space-y-1.5 md:h-[72px]">
              <Label>Units</Label>
              <Input
                type="any"
                {...register("second_purchase_unit", {
                  required: true,
                })}
              />
              <span className="text-red-600">
                <ErrorMessage errors={errors} name="second_purchase_unit" />
              </span>
            </div>
            <div className="mb-2 h-28 flex flex-col space-y-1.5 md:h-[72px]">
              <Label>Price per share</Label>
              <Input
                type="any"
                {...register("second_purchase_price", {
                  required: true,
                })}
              />
              <span className="text-red-600">
                <ErrorMessage errors={errors} name="second_purchase_price" />
              </span>
            </div>
          </div>
          <div className="flex gap-1 items-center justify-end">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                reset();
              }}
            >
              Clear Fields
            </Button>
            <Button type="submit" className="cursor-pointer">
              Calculate Average
            </Button>
            <CredenzaPopUp
              open={open}
              onOpenChange={setOpen}
              title="Stock market average calculator"
            >
              <div className="pb-16 md:pb-0">
                <h1 className="font-medium">
                  The amount invested in the 1st purchase:{" "}
                  <span className="text-lg font-bold">
                    {Number(
                      stockMarketAverageCalculatedData?.amountInvertedInFirstPurchase!.toFixed(
                        1
                      )
                    )}
                  </span>
                </h1>
                <h1 className="font-medium">
                  The amount invested in the 2nd purchase:{" "}
                  <span className="text-lg font-bold">
                    {Number(
                      stockMarketAverageCalculatedData?.amountInvertedInSecondPurchase!.toFixed(
                        1
                      )
                    )}
                  </span>
                </h1>
                <h1 className="font-medium">
                  Total units:{" "}
                  <span className="text-lg font-bold">
                    {Number(
                      stockMarketAverageCalculatedData?.totalUnits!.toFixed(1)
                    )}
                  </span>
                </h1>
                <h1 className="font-medium">
                  Average Price:{" "}
                  <span className="text-lg font-bold">
                    {Number(
                      stockMarketAverageCalculatedData?.averagePrice!.toFixed(1)
                    )}
                  </span>
                </h1>
                <h1 className="font-medium">
                  Total Amount:{" "}
                  <span className="text-lg font-bold">
                    {Number(
                      stockMarketAverageCalculatedData?.totalAmount!.toFixed(1)
                    )}
                  </span>
                </h1>
              </div>
            </CredenzaPopUp>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
