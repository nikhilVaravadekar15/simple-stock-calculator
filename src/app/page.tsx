import React from "react";
import { data } from "@/data";
import { TData } from "@/types";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto p-4">
      {data.map((item: TData, index: number) => (
        <BentoGridItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          url={item.url}
          backgroundImageUrl={item.backgroundImageUrl}
          className={`border ${
            index === 0 || index === 3 || index === 4 || index === 10
              ? "md:col-span-2"
              : ""
          }`}
        />
      ))}
    </BentoGrid>
  );
}
