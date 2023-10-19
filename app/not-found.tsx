import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-7">
        {/*<Image src={NotFoundImage} width={500} height={500} alt="Resource Not Found Image" />*/}
        <span className="text-2xl font-medium">Você está tentando acessar uma página que não existe</span>
        <Link href="/">
          <Button className="gap-2">
            <Home /> Página inicial
          </Button>
        </Link>
      </div>
    </>
  );
}
