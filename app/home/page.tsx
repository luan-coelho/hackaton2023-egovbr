import AcompanhamentoCard from "@/components/acompanhamento/card";

export default function Home() {
  return <>
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-10 content-center">
        <AcompanhamentoCard descricao="Card1"/>
        <AcompanhamentoCard descricao="Card1"/>
        <AcompanhamentoCard descricao="Card1"/>
        <AcompanhamentoCard descricao="Card1"/>
      </div>
    </div>
  </>;
}