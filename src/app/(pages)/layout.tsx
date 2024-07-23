import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {children}
      <div className="w-[512px] flex">
        <Link
          href={"/"}
          passHref={true}
          className="text-sm py-4 px-8 flex gap-2 items-center justify-center font-semibold rounded-2xl"
        >
          <ArrowBigLeft size={20} />
          Go back
        </Link>
      </div>
    </div>
  );
}
