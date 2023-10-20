"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alternativa, Pergunta } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useFetch } from "@/hooks/useFetch";

type Setor = {
  id: number,
  descricao: string
}

export default function FormOvedoria() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [pergunta, setPergunta] = useState<Pergunta>({} as Pergunta);
  const [descricaoPergunta, setDescricaoPergunta] = useState<string>();
  const [descricaoAlternativa, setDescricaoAlternativa] = useState<string>();
  const [criandoPergunta, setCriandoPergunta] = useState<boolean>(false);
  const [alternativa, setAlternativa] = useState<Alternativa>({} as Alternativa);
  const [numeroAlernativas, setNumeroAlernativas] = useState<number>(5);

  const { data, isLoading } = useFetch<Setor[]>("http://localhost:8080/setor");

  function preencherFormularioIso() {
    const perguntas: Pergunta[] = [
      {
        id: 1,
        descricao: "Como você avalia a eficácia dos processos de qualidade da equipe?",
        alternativas: [
          { id: 1, descricao: "Ineficaz" },
          { id: 2, descricao: "Adequado, mas precisa de melhorias" },
          { id: 3, descricao: "Eficaz" },
        ],
        resposta: "",
      },
      {
        id: 2,
        descricao: "A equipe está envolvida na definição e revisão de objetivos de qualidade?",
        alternativas: [
          { id: 1, descricao: "Não" },
          { id: 2, descricao: "Parcialmente" },
          { id: 3, descricao: "Sim" },
        ],
        resposta: "",
      },
      {
        id: 3,
        descricao: "Existe um sistema para coleta e análise de feedback do cliente?",
        alternativas: [
          { id: 1, descricao: "Não" },
          { id: 2, descricao: "Existe, mas não é eficaz" },
          { id: 3, descricao: "Sim e é eficaz" },
        ],
        resposta: "",
      },
    ];
    setPerguntas(perguntas);
  }

  function adicionarPergunta() {
    pergunta.descricao = descricaoPergunta!;
    perguntas.push(pergunta);
    setPerguntas(perguntas);
    const perguntaVazia = {
      alternativas: [] as Alternativa[],
      descricao: "",
    } as Pergunta;
    setDescricaoPergunta("");
    setPergunta(perguntaVazia);
    setNumeroAlernativas(5);
  }

  function adicionarAlternativa() {
    if (!pergunta.alternativas) {
      pergunta.alternativas = [];
    }
    alternativa.descricao = descricaoAlternativa!;
    pergunta.alternativas.push(alternativa!);
    setPergunta(pergunta);
    setNumeroAlernativas(numeroAlernativas - 1);
    setDescricaoAlternativa("");
    setAlternativa({} as Alternativa);
  }

  return <>
    <Card className="md:w-full h-full bg-white">
      <CardHeader
        className="bg-zinc-800 flex items-center justify-center text-center font-medium text-white rounded-t-xl rounded-b-3xl">
        <CardTitle className="text-xl">Formulário</CardTitle>
      </CardHeader>
      <CardContent className="px-3 py-4">

        <Label>Setor</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {!isLoading && data!.map((setor) => {
                return <><SelectItem value={setor.id.toString()}>{setor.descricao}</SelectItem></>;
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="mt-5">
          {perguntas.map((p, index) => {
            return <>
              <div>
                <h2 className="font-bold">{index + 1}. {p.descricao}</h2>
                <div className="mx-8 my-2">
                  {p.alternativas.map((alt, index) => {
                    return <><span className="block">{index + 1}) {alt.descricao}</span> </>;
                  })}
                </div>
              </div>
            </>;
          })}
        </div>

        <Button className="bg-yellow-500 text-black mb-3 text-white h-10 w-full" onClick={preencherFormularioIso}>Gerar
          formulário ISO 9001</Button>

        {!criandoPergunta &&
          <Button className="bg-[#044cb8] text-white h-10 w-full" onClick={() => {
            setShowForm(true);
            setCriandoPergunta(true);
          }}>Nova pergunta</Button>
        }

        {showForm &&
          <div className="mt-4">
            <div className="mt-4 flex flex-col gap-1">
              <label className="font-medium" htmlFor="pergunta">Pergunta</label>
              <Textarea className="h-40" onChange={(e) => setDescricaoPergunta(e.target.value)}
                        value={descricaoPergunta}></Textarea>
            </div>

            {pergunta.alternativas && pergunta.alternativas.map((alt, index) => {
              return <><span className="block">{index + 1}) {alt.descricao}</span></>;
            })}

            <div className="mt-4 flex flex-col gap-1">
              <label className="font-medium" htmlFor="pergunta">Alternativa</label>
              <Input onChange={(e) => setDescricaoAlternativa(e.target.value)} type="text"
                     value={descricaoAlternativa} />
            </div>

            <span className="font-medium">Número de alternativas restantes {numeroAlernativas}</span>

            {!criandoPergunta ?
              <Button disabled={numeroAlernativas == 0} className="mt-3 bg-[#FFC82A] text-black h-10 w-full"
                      onClick={() => setCriandoPergunta(true)}>Nova alternativa</Button>
              :
              <Button disabled={!descricaoAlternativa || numeroAlernativas == 0}
                      className="mt-3 bg-blue-700 text-white h-10 w-full"
                      onClick={adicionarAlternativa}>Adicionar alternativa</Button>
            }

            <Button disabled={!descricaoPergunta && (pergunta.alternativas && pergunta.alternativas.length < 2)}
                    className="mt-3 bg-green-600 text-white h-10 w-full" onClick={adicionarPergunta}>
              Adicionar pergunta</Button>
          </div>
        }

      </CardContent>
    </Card>
  </>;
}