"use client"

import PostagemCard from "@/components/acompanhamento/card";
import { Postagem, Setor } from "@/types";
import { useFetch } from "@/hooks/useFetch";

export default function Home() {
  const { data, isLoading } = useFetch<Postagem[]>("http://localhost:8080/postagem");

  return <>
    {!isLoading &&
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-10 content-center">
          {data!.map((p) => {
            return <><PostagemCard postagem={p} /> </>;
          })}
        </div>
      </div>
    }
  </>;
}