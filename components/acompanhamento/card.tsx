
import Image from "next/image";
import {Postagem } from "@/types";

type PostagemCardProps = {
  postagem: Postagem
}

export default function PostagemCard({ postagem }: PostagemCardProps) {
  return <>
    <div
      className="bg-white flex items-center gap-4 w-[300px] flex items-center justify-center rounded-2xl flex-col">
      <div className="rounded-2xl">
        <Image className="rounded-2xl w-full font-medium" src={postagem.urlImagem} alt="ew" width={200} height={200} />
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-black text-2xl font-medium">{postagem.descricaoPostagem}</span>
      </div>
    </div>
  </>;
}
