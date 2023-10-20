import Image from "next/image";
import { Postagem } from "@/types";

type PostagemCardProps = {
  postagem: Postagem
}

export default function PostagemCard({ postagem }: PostagemCardProps) {
  return <>
    <div
      className="bg-[#044CB8] flex items-center gap-4 w-[300px] justify-center rounded-2xl flex-col">
      <div className="rounded-2xl">
        <Image className="rounded-2xl w-full font-medium" src={postagem.urlImagem} alt="ew" width={200} height={200} />
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-[#FFC82A] text-2xl font-medium">{postagem.descricaoPostagem}</span>
        <span className="text-white text-xl font-medium">{postagem.descricaoPostagem}</span>
        <span className="text-zinc-300 text-xl">{postagem.descricaoPostagem}</span>
      </div>
    </div>
  </>;
}
