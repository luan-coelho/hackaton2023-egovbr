"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormOvedoria() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([{
    pergunta: "Quanto é 1 mais 2?",
    alternativas: [
      "1", "2", "3", "4", "5",
    ],
    correta: 1,
  }]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [pergunta, setPergunta] = useState<string>();
  const [alternativa, setAlternativa] = useState<string>();
  const [numeroPerguntas, setNumeroPerguntas] = useState<number>(5);

  type Pergunta = {
    pergunta: String,
    alternativas: string[],
    correta: number
  }

  function adicionarPergunta() {
    let perguntaAux = {
      pergunta: pergunta!,
      alternativas: [],
      correta: 1,
    };
    perguntas.push({
      ...perguntaAux,
    });
    setPerguntas(perguntas);
    setShowForm(false);
  }

  function adicionarAlternativa(pergunta: Pergunta) {
    let perguntaAux = {
      pergunta: pergunta!,
      alternativas: [],
      correta: 1,
    };
    setNumeroPerguntas(numeroPerguntas - 1);
  }

  return <>
    <Card className="md:w-full h-full bg-white">
      <CardHeader
        className="bg-zinc-800 flex items-center justify-center text-center font-medium text-white rounded-t-xl rounded-b-3xl">
        <CardTitle className="text-xl">Formulário</CardTitle>
      </CardHeader>
      <CardContent className="px-3 py-4">
        {perguntas.map((p, index) => {
          return <>
            <div>
              <h2 className="font-bold">{index + 1}. {p.pergunta}</h2>
              <div className="mx-8 my-2">
                {p.alternativas.map((alternativa, index) => {
                  return <><span className="block">{index + 1}) {alternativa}</span> </>;
                })}
              </div>
            </div>
          </>;
        })}

        <Button className="bg-[#044cb8] text-white h-10 w-full" onClick={() => setShowForm(true)}>Nova pergunta</Button>

        {showForm &&
          <div className="mt-4">
            <form>
              <div className="mt-4 flex flex-col gap-1">
                <label className="font-medium" htmlFor="pergunta">Pergunta</label>
                <Textarea className="h-40" onChange={(e) => setPergunta(e.target.value)}></Textarea>
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <label className="font-medium" htmlFor="pergunta">Alternativa</label>
                <Input onChange={(e) => setAlternativa(e.target.value)} type="text" />
              </div>

              <span></span>

              <Button disabled={numeroPerguntas == 0} className="mt-3 bg-[#FFC82A] text-black h-10 w-full"
                      onClick={() => setShowForm(true)}>Nova alternativa</Button>

              <Button className="mt-3 bg-green-600 text-white h-10 w-full" onClick={adicionarPergunta}>Adicionar
                pergunta</Button>
            </form>
          </div>
        }

      </CardContent>
    </Card>
  </>;
}