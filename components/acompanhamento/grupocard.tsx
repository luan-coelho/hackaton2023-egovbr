import Image from "next/image";
import { Grupo } from "@/types";
import { useRouter } from "next/navigation";

type GrupoCardProps = {
  grupo: Grupo
}
export default function GrupoCard({ grupo }: GrupoCardProps) {
  const router = useRouter();

  return <>
    <div
      onClick={() => router.push(`/grupo/${grupo.id}`)}
      className="cursor-pointer bg-white flex items-center gap-4 w-[300px] flex items-center justify-center rounded-2xl flex-col">
      <div className="rounded-2xl">
        <Image className="rounded-2xl w-full font-medium" src={grupo.imagem} alt="ew" width={200} height={200} />
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-black text-xl font-medium">{grupo.titulo}</span>
      </div>
    </div>
  </>;
}