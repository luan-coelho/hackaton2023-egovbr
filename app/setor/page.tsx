"use client";

import { Setor } from "@/types";
import GrupoCard from "@/components/acompanhamento/grupocard";
import { useFetch } from "@/hooks/useFetch";
import SetorCard from "@/components/acompanhamento/setorcard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ListaSetor() {
  const { data, isLoading } = useFetch<Setor[]>("http://localhost:8080/setor");
  const router = useRouter();

  return <>
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-3xl font-bold">Setores</h1>
        <Button onClick={() => router.push("/setor/create")} className="bg-green-600 text-white">Cadastrar novo</Button>
      </div>
      <div className="grid grid-cols-3 gap-10 content-center">
        {!isLoading && data!.map((s) => {
          return <><SetorCard setor={s} /></>;
        })}
      </div>
    </div>
  </>;
}
