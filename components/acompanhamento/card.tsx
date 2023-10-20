type Acompanhamento = {
  descricao: string
}

export default function AcompanhamentoCard({ descricao }: Acompanhamento) {
  return <>
    <div className="bg-red-400 w-[300px] h-[300px] flex items-center justify-center rounded-2xl">
      <span className="text-5xl">{descricao}</span>
    </div>
  </>;
}