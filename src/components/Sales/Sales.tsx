import { UserRoundPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

export function Sales() {
  return (
    <Card className="w-full md:w-1/2 ">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg text-gray-700 sm:text-xl select-none">
            Últimos Clientes
          </CardTitle>
          <UserRoundPlus className="ml-auto w-5 h-5" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[450px] w-full rounded-md border-none">
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
          <article className="w-full flex items-center gap-2 border-b py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://avatars.githubusercontent.com/u/8683378?v=4" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col px-2">
              <p className="sm:text-base font-semibold">Sujeito Programador</p>
              <p className="text-[12px] text-gray-500 ">guanabara@gmai.com</p>
            </div>
          </article>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
