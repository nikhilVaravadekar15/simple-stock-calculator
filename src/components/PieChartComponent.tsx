"use client";

import * as React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TChartData } from "@/types";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function PieChartComponent({
  title,
  total,
  chartData,
}: {
  title: string;
  total: number;
  chartData: Array<TChartData>;
}) {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1">
        <ChartContainer config={{}} className="mx-auto aspect-square max-h-72">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="key"
              innerRadius={88}
              strokeWidth={8}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {title}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {chartData.map((item) => {
          return (
            <div
              key={item.key}
              className="w-full font-semibold leading-none flex items-center justify-between"
            >
              <div className="flex gap-1 items-center justify-center">
                <div
                  style={{
                    height: "8px",
                    width: "8px",
                    backgroundColor: `${item.fill}`,
                    borderRadius: "100%",
                  }}
                ></div>
                <span className="uppercase">{item.key}</span>
              </div>
              <span>{Number(item.value).toFixed(3)}</span>
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
}
