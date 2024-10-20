"use client";

import { ChartColumn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

export default function ChartOverview() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const chartData = [
    { month: "Janeiro", desktop: 186, mobile: 80 },
    { month: "Fevereiro", desktop: 305, mobile: 200 },
    { month: "Março", desktop: 237, mobile: 120 },
    { month: "Abril", desktop: 73, mobile: 190 },
    { month: "Maio", desktop: 209, mobile: 130 },
    { month: "Junho", desktop: 214, mobile: 140 },
  ];

  return (
    <Card className="w-full md:w-1/2 ">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
            Overview Vendas
          </CardTitle>
          <ChartColumn className="ml-auto w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full min-h-[200px]">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}></Bar>
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
