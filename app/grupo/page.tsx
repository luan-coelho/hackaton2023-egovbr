"use client";

import { Grupo } from "@/types";
import GrupoCard from "@/components/acompanhamento/grupocard";
import { useFetch } from "@/hooks/useFetch";

export default function ListaGrupo() {
  const { data, isLoading } = useFetch<Grupo[]>("http://localhost:8080/grupo");

  return <>
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-bold">Grupos</h1>
      <div className="grid grid-cols-2 gap-10 content-center">
        {!isLoading && data!.map((g) => {
          return <GrupoCard grupo={g} />;
        })}
      </div>
    </div>
  </>;
}
