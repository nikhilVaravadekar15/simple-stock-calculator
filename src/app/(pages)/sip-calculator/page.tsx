"use client";

import * as React from "react";
import { ZSipCalculator } from "@/zod";
import { useForm } from "react-hook-form";
import { getRandomColor } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import PieChartComponent from "@/components/PieChartComponent";
import { TChartData, TSipCalculator, TSipCalculatorPage } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colors } from "@/data";

export default function SipCalculatorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSipCalculator>({
    defaultValues: {
      monthlyInvestmentAmount: 3000,
      expectedAnnualReturns: 10,
      investmentPeriodInYears: 10,
      yearlyIncreaseInMonthlyInvestment: 0,
    },
    resolver: zodResolver(ZSipCalculator),
  });

  const [totalGain, setTotalGain] = React.useState<number>(259656);
  const [chartData, setChartData] = React.useState<Array<TChartData>>([]);
  const [sipCalculatedData, setSipCalculatedData] =
    React.useState<TSipCalculatorPage>({
      amountInvested: 360000,
      expectedAmount: 619656,
    });

  const onSubmit = (data: TSipCalculator) => {
    const expectedMonthlyReturns = data.expectedAnnualReturns / (12 * 100);
    const totalTimePeriod = data.investmentPeriodInYears * 12;

    const amountInvested = data.monthlyInvestmentAmount * totalTimePeriod;
    const expectedAmount =
      data.monthlyInvestmentAmount *
      ((Math.pow(1 + expectedMonthlyReturns, totalTimePeriod) - 1) /
        expectedMonthlyReturns) *
      (1 + expectedMonthlyReturns);
    const totalGain = expectedAmount - amountInvested;

    setSipCalculatedData({
      amountInvested: amountInvested,
      expectedAmount: expectedAmount,
    });
    setTotalGain(totalGain);
  };

  React.useEffect(() => {
    let counter: number = 0;
    let arr: Array<TChartData> = [];
    for (const key in sipCalculatedData) {
      arr.push({
        key: key,
        // @ts-ignore
        value: sipCalculatedData[key],
        fill: colors[counter],
      });
      counter++;
    }

    setChartData(arr);
  }, [sipCalculatedData]);

  return (
    <Card className="w-full md:w-[768px]">
      <CardHeader>
        <CardTitle>SIP(Systematic Investment Plan) calculator</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex">
        <div className="w-full flex gap-12 flex-col items-center justify-between md:gap-4 md:flex-row">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid w-full items-center gap-4 mb-4">
              <div className="h-20 flex flex-col space-y-1.5 md:h-[72px]">
                <Label>Monthly Investment Amount</Label>
                <Input
                  type="any"
                  {...register("monthlyInvestmentAmount", {
                    required: true,
                  })}
                />
                <span className="text-xs text-red-600">
                  <ErrorMessage
                    errors={errors}
                    name="monthlyInvestmentAmount"
                  />
                </span>
              </div>
              <div className="h-20 flex flex-col space-y-1.5 md:h-[72px]">
                <Label>Investment Period in years</Label>
                <Input
                  type="any"
                  {...register("investmentPeriodInYears", {
                    required: true,
                  })}
                />
                <span className="text-xs text-red-600">
                  <ErrorMessage
                    errors={errors}
                    name="investmentPeriodInYears"
                  />
                </span>
              </div>
              <div className="h-20 flex flex-col space-y-1.5 md:h-[72px]">
                <Label>Expected Annual Returns(%)</Label>
                <Input
                  type="any"
                  {...register("expectedAnnualReturns", {
                    required: true,
                  })}
                />
                <span className="text-xs text-red-600">
                  <ErrorMessage errors={errors} name="expectedAnnualReturns" />
                </span>
              </div>
              {/* <div className="h-20 flex flex-col space-y-1.5 md:h-[72px]">
                <Label>
                  Step up - Yearly Increase in Monthly Investment(%)
                </Label>
                <Input
                  type="any"
                  {...register("yearlyIncreaseInMonthlyInvestment", {
                    required: false,
                  })}
                />
                <span className="text-xs text-red-600">
                  <ErrorMessage
                    errors={errors}
                    name="yearlyIncreaseInMonthlyInvestment"
                  />
                </span>
              </div> */}
            </div>
            <div className="flex gap-1 items-center justify-center md:justify-end">
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
            </div>
          </form>
          <PieChartComponent
            title="Total Gains"
            total={totalGain}
            chartData={chartData}
          />
        </div>
      </CardContent>
    </Card>
  );
}
