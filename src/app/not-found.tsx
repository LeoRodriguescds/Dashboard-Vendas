import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="sm:ml-14 p-4 flex flex-col content-center justify-center items-center w-screen h-screen">
      <div className="rounded-md w-[700px] h-[500px] flex flex-col content-center justify-center items-center gap-3">
        <h1 className="text-[200px] font-bold">404</h1>
        <p className="text-[35px]">Página não encontrada</p>
        <Button className="w-[200px] h-[50] text-lg">
          <Link href="/Dashboard">Home</Link>
        </Button>
      </div>
    </div>
  );
}
