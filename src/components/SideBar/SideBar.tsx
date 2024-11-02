"use client";

import Link from "next/link";
import { Rotas } from "../../lib/routes";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Boxes,
  Home,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

export default function SideBar() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col w-full bg-muted/40">
      {/* DESKTOP */}
      <aside className="fixed flex-col inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex ">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href={Rotas.dashboard}
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full gap-2"
            >
              <Package className="w-4 h-4" />
              <span className="sr-only">logo do projeto desktop</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={Rotas.dashboard}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground gap-2"
                >
                  <Home className="w-5 h-5 transition-all" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={Rotas.pedidos}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground gap-2"
                >
                  <ShoppingCart className="w-5 h-5 transition-all" />
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={Rotas.produtos}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground gap-2"
                >
                  <Boxes className="w-5 h-5 transition-all" />
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={Rotas.clientes}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground gap-2"
                >
                  <Users className="w-5 h-5 transition-all" />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <DropdownMenu>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground gap-2">
                      <Settings className="w-5 h-5 transition-all" />
                      <span className="sr-only">Configurações</span>
                    </div>
                  </DropdownMenuTrigger>
                </TooltipTrigger>

                <DropdownMenuContent className="w-56 ml-3">
                  <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Tema</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="flex gap-4 text-red-400 hover:bg-red-300">
                      <LogOut className="w-5 h-5" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      {/* DESKTOP */}

      {/* MOBILE */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:boder-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href={Rotas.dashboard}
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  <span className="sr-only">Logo do projeto</span>
                </Link>

                <Link
                  href={Rotas.dashboard}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-200 hover:transition-all hover:rounded-full h-10"
                  prefetch={false}
                >
                  <Home className="w-5 h-5 transition-all" />
                  Início
                </Link>
                <Link
                  href={Rotas.pedidos}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-200 hover:transition-all hover:rounded-full h-10"
                  prefetch={false}
                >
                  <ShoppingCart className="w-5 h-5 transition-all" />
                  Pedidos
                </Link>
                <Link
                  href={Rotas.produtos}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-200 hover:transition-all hover:rounded-full h-10"
                  prefetch={false}
                >
                  <Boxes className="w-5 h-5 transition-all" />
                  Produtos
                </Link>
                <Link
                  href={Rotas.clientes}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-200 hover:transition-all hover:rounded-full h-10"
                  prefetch={false}
                >
                  <Users className="w-5 h-5 transition-all" />
                  Clientes
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground hover:bg-slate-200 hover:transition-all hover:rounded-full h-10"
                  prefetch={false}
                >
                  <Settings className="w-5 h-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
      {/* MOBILE */}
    </div>
  );
}
