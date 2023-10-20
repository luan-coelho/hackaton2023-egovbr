import Image from "next/image";
import { Setor } from "@/types";
import { useRouter } from "next/navigation";

type SetorCardProps = {
  setor: Setor
}
export default function SetorCard({ setor }: SetorCardProps) {
  const router = useRouter();

  return <>
    <div
      onClick={() => router.push(`/setor/${setor.id}`)}
      className="cursor-pointer bg-white flex items-center gap-4 w-[300px] flex items-center justify-center rounded-2xl flex-col">
      <div className="rounded-2xl">
        <Image className="rounded-2xl w-full font-medium" src={setor.grupo.imagem!} alt="ew" width={200} height={200} />
      </div>
      <div className="p-4 flex flex-col">
          <span className="text-black text-xl font-medium ">{setor.descricao}</span>
      </div>
      <div className="p-4 flex flex-col">
        <span className="text-black text-xl font-medium">{setor.grupo.titulo}</span>
      </div>
    </div>
  </>;
}