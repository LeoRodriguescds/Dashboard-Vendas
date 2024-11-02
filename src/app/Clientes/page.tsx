import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Search, Trash2, Users } from "lucide-react";

export default function Clientes() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="sm:ml-14 p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">Clientes</h1>
        <Button>
          <Users />
          Adicionar Clientes
        </Button>
      </header>
      <section className="w-full h-full mt-4">
        <div className="grid grid-cols-4 gap-4">
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
        </div>

        <div className="mt-10 grid grid-cols-12 gap-4">
          <div className="col-span-3 gap-1.5">
            <Label htmlFor="termo">Termo</Label>
            <Input
              id="termo"
              type="text"
              placeholder="Pesquise pelo código ou descrição do produto"
            />
          </div>
          <div className="col-span-2 gap-1.5">
            <Select>
              <Label htmlFor="categorias">Categorias</Label>
              <SelectTrigger id="categorias" className="w-full">
                <SelectValue placeholder="Selcione" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 gap-1.5">
            <Select>
              <Label htmlFor="status">Status</Label>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Selcione" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Ativo</SelectItem>
                  <SelectItem value="banana">Inativo</SelectItem>
                  <SelectItem value="blueberry">Todos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <div className="w-full">
              <Button
                className="mt-6 w-full border-red-600 text-red-600 hover:bg-red-100 hover:text-red-800"
                variant="outline"
              >
                <Trash2 className="h-4 w-4" />
                Limpar Filtros
              </Button>
            </div>
            <div className="w-full">
              <Button className="mt-6  w-full border-blue-800 bg-blue-800 hover:bg-blue-900 hover:text-white">
                <Search />
                Buscar
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </section>
    </div>
  );
}
