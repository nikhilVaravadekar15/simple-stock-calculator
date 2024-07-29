import React from "react";
import { Chart } from "react-google-charts";

export default function PieChartComponent({
  title,
  total,
  chartData,
}: {
  title: string;
  total: number;
  chartData: Array<Array<string>>;
}) {
  const data = [["key", "value"], ...chartData];

  return (
    <div className="w-full md:w-[704px] border rounded">
      <div className="p-4 text-sm font-bold">
        {title.toUpperCase()}: {Number(total).toFixed(3)}
      </div>
      <Chart
        chartType="PieChart"
        data={data}
        options={{
          title: "Pie Chart",
        }}
        width={"100%"}
        height={"256px"}
      />
      {chartData.map((item, index) => {
        return (
          <div
            key={index}
            className="px-2 font-semibold flex items-center justify-between"
          >
            {item.map((citem, cindex) => {
              return <div key={cindex}>{citem}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
