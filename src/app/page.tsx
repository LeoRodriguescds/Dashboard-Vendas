import ChartOverview from "@/components/chart/Chart";
import { Sales } from "@/components/Sales/Sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, ScrollText, ShoppingBasket, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="sm:ml-14 p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <section className="grid md:grid-cols-4 sm:grid-cols-2 max-[639px]:grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de vendas em 30 dias.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000,00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Novos clientes em 30 dias.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">120</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
                Pedidos Hoje
              </CardTitle>
              <ShoppingBasket className="ml-auto w-5 h-5" />
            </div>
            <CardDescription>Total de pedidos efetuados hoje.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>
        <Card>
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
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </div>
  );
}
