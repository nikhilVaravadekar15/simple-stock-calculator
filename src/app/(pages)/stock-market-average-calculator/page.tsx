import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function StockMarketAverageCalculatorPage() {
  return (
    <Card className="w-[512px]">
      <CardHeader>
        <CardTitle>Stock market average calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mb-4">
            <span className="text-sm font-semibold">First Purchase</span>
            <div className="flex flex-col space-y-1.5">
              <Label>Units</Label>
              <Input type="number" min={1} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Price per share</Label>
              <Input type="number" />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <span className="text-sm font-semibold">Second Purchase</span>
            <div className="flex flex-col space-y-1.5">
              <Label>Units</Label>
              <Input type="number" min={1} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Price per share</Label>
              <Input type="number" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Clear Fields</Button>
        <Button>Calculate Average</Button>
      </CardFooter>
    </Card>
  );
}
