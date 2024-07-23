import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TData } from "@/types";
import { data } from "@/data";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center flex-wrap lg:mb-0 lg:w-full lg:max-w-5xl ">
        {data.map((item: TData, index: number) => {
          return (
            <Link
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card key={item.title} className="p-4">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
