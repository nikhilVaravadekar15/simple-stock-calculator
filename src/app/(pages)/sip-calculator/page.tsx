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

export default function SipCalculatorPage() {
  return (
    <Card className="w-[512px]">
      <CardHeader>
        <CardTitle>SIP(Systematic Investment Plan) calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 mb-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Monthly Investment Amount</Label>
              <Input type="number" min={1} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Investment Period in years</Label>
              <Input type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Expected Annual Returns(%)</Label>
              <Input type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Step up - Yearly Increase in Monthly Investment(%)</Label>
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
