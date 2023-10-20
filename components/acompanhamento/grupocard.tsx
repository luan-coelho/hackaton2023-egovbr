import Image from "next/image";
import { Grupo } from "@/types";
type GrupoCardProps = {
  grupo: Grupo
}
export default function GrupoCard({ grupo }: GrupoCardProps) {
  return <>
    <div
      className="bg-[#044CB8] flex items-center gap-4 w-[300px] flex items-center justify-center rounded-2xl flex-col">
      <div className="rounded-2xl">
        <Image className="rounded-2xl w-full font-medium" src={grupo.imagem} alt="ew" width={200} height={200} />
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-white text-xl font-medium">{grupo.titulo}</span>
      </div>
    </div>
  </>;
}