"use client";

import { Grupo } from "@/types";
import GrupoCard from "@/components/acompanhamento/grupocard";
import { useFetch } from "@/hooks/useFetch";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { mutate } from "swr";

export default async function ListaGrupo() {
  const { data, isLoading } = useFetch<Grupo[]>("http://localhost:8080/grupo");
  const router = useRouter();

  return <>
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-3xl font-bold">Grupos</h1>
        <Button onClick={() => router.push("/grupo/create")} className="bg-green-600 text-white">Cadastrar novo</Button>
      </div>
      <div className="grid grid-cols-2 gap-10 content-center">
        {!isLoading && data!.map((g) => {
          return <> <GrupoCard grupo={g} /> </>;
        })}
      </div>
    </div>
  </>;
}
