"use client";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ZStockAvarageCalculator } from "@/zod";
import { TStockAvarageCalculator } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TStockMarketAverageCalculatorPage = {
  amountInvertedInFirstPurchase: number;
  amountInvertedInSecondPurchase: number;
  totalUnits: number;
  totalAmount: number;
  averagePrice: number;
};

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
            <div className="mb-2 h-28 flex flex-col space-y-1.5 md:h-[72px]">
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
            <Pop
              open={open}
              onOpenChange={setOpen}
              stockMarketAverageCalculatedData={
                stockMarketAverageCalculatedData
              }
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function Pop({
  open,
  onOpenChange,
  stockMarketAverageCalculatedData,
}: {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  stockMarketAverageCalculatedData: TStockMarketAverageCalculatorPage | null;
}) {
  return (
    <Credenza open={open} onOpenChange={onOpenChange}>
      <CredenzaTrigger asChild>
        <></>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Credenza</CredenzaTitle>
          <CredenzaDescription>
            A responsive modal component for shadcn/ui.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          {stockMarketAverageCalculatedData ? (
            JSON.stringify(stockMarketAverageCalculatedData, null, 4)
          ) : (
            <></>
          )}
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}
