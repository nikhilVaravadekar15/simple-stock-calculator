import {
  BadgePercent,
  Calculator,
  ChartBarBig,
  ChartBarIncreasing,
  ChartColumn,
  ChartSpline,
  Percent,
} from "lucide-react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconTableColumn,
} from "@tabler/icons-react";
import { TData } from "@/types";

export const data: Array<TData> = [
  {
    title: "Stock market average calculator",
    url: "stock-market-average-calculator",
    icon: <ChartSpline className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "SIP calculator",
    url: "sip-calculator",
    icon: <Calculator className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/210705/pexels-photo-210705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Percentage(%) calculator",
    url: "percentage-calculator",
    icon: <Percent className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "EMI calculator",
    url: "emi-calculator",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/4386338/pexels-photo-4386338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "CAGR calculator",
    url: "cagr-calculator",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.prismic.io/cred/281a5d60-8cbb-4a8f-ac85-5d0d24c3baa9_Fixed+Deposit+Calculator.jpg?auto=compress,format&rect=7565,0,2016,1080&w=560&h=300",
  },
  {
    title: "SWP calculator",
    url: "swp-calculator",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Compound interest calculator",
    url: "compound-interest-calculator",
    icon: <ChartColumn className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/164636/pexels-photo-164636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Fixed deposit calculator",
    url: "fixed-deposit-calculator",
    icon: <ChartBarIncreasing className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/3943715/pexels-photo-3943715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Simple loan calculator",
    url: "simple-loan-calculator",
    icon: <BadgePercent className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/342942/pexels-photo-342942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "PPF calculator",
    url: "ppf-calculator",
    icon: <ChartBarBig className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/170453/pexels-photo-170453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "RD calculator",
    url: "rd-calculator",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    backgroundImageUrl:
      "https://images.pexels.com/photos/3283142/pexels-photo-3283142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const colors: Array<string> = [
  "#132789",
  "#E26929",
  "#0087C8",
  "#49073F",
  "#0F9116",
  "#9CD25F",
  "#E50D7E",
  "#32D612",
  "#DDBD59",
  "#754B34",
  "#F0FF50",
  "#945CFE",
  "#31E6F9",
  "#B89DC2",
  "#CF9B40",
];
