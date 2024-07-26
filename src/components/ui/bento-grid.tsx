import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  url,
  backgroundImageUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  url?: string;
  backgroundImageUrl?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-black mb-2 mt-2">{title}</div>
      </div>

      <Link
        href={url!}
        className="w-fit px-6 py-3 text-xs font-semibold text-white bg-black rounded-full"
      >
        Try now
      </Link>
    </div>
  );
};
