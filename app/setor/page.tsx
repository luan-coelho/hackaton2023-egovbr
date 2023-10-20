"use client";

import { Setor } from "@/types";
import GrupoCard from "@/components/acompanhamento/grupocard";
import { useFetch } from "@/hooks/useFetch";
import SetorCard from "@/components/acompanhamento/setorcard";

export default function ListaSetor() {
  const { data, isLoading } = useFetch<Setor[]>("http://localhost:8080/setor");


  return <>
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-bold">Setores</h1>
      <div className="grid grid-cols-3 gap-10 content-center">
        {!isLoading && data!.map((s) => {
          return <SetorCard setor={s} />;
        })}
      </div>
    </div>
  </>;
}
