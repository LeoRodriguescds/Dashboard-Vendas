import { ChartPedidos } from "@/components/chart/ChartPedidos";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollText } from "lucide-react";

export default function Pedidos() {
  return (
    <div className="sm:ml-14 p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Pedidos</h1>
      </header>
      <section className="flex flex-col h-full gap-5">
        <div className="w-full ">
          <ChartPedidos />
        </div>
        <div className="flex w-full gap-5">
          <Card className="w-1/3">
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                  Total de Pedidos Mensais
                </CardTitle>
                <ScrollText className="ml-auto w-5 h-5" />
              </div>
              <CardDescription>Total de pedidos em 30 dias.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">92</p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                  Total de Pedidos Mensais
                </CardTitle>
                <ScrollText className="ml-auto w-5 h-5" />
              </div>
              <CardDescription>Total de pedidos em 30 dias.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">92</p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                  Total de Pedidos Mensais
                </CardTitle>
                <ScrollText className="ml-auto w-5 h-5" />
              </div>
              <CardDescription>Total de pedidos em 30 dias.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">92</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
