"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import React, { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import pt from "date-fns/locale/pt";
import { Grupo, Setor } from "@/types";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

registerLocale("pt", pt);

export default function EditarGrupo({ params }: {
  params: {
    id: number
  }
}) {
  const [grupoId, setGrupoId] = useState<string>();
  const router = useRouter();

  const { data: setorData, isLoading: isSetorLoading } = useFetch<Setor>(`http://localhost:8080/setor/${params.id}`);
  const { data: grupoData, isLoading: isGrupoLoading } = useFetch<Grupo[]>("http://localhost:8080/grupo");


  const schema = z.object({
    descricao: z.string()
      .nonempty("A descricao é obrigatória"),
  });

  const createSetor = useForm<Setor>({
    resolver: zodResolver(schema),
    defaultValues: setorData,
  });

  const { handleSubmit } = createSetor;

  async function criarSetor(setor: Setor) {
    setor.grupo = grupoData?.find((g) => g.id = Number.parseInt(grupoId!))!;
    await api.post(`http://localhost:8080/setor/`, setor);
    router.push("/setor");
  }

  return (
    <>
      {!isSetorLoading && !isGrupoLoading &&
        <FormProvider {...createSetor}>
          <form onSubmit={handleSubmit(criarSetor)} className="grid gap-4">
            <Form.Field>
              <Form.Label htmlFor="descricao">
                Descricao
              </Form.Label>
              <Form.TextField name="descricao" />
              <Form.ErrorMessage field="descricao" />
            </Form.Field>
            <Form.Field>
              <Label>Setor</Label>
              <Select value={grupoId} onValueChange={setGrupoId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    {!isGrupoLoading && grupoData!.map((grupo) => {
                      return <><SelectItem value={grupo.id.toString()}>{grupo.titulo}</SelectItem></>;
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Form.Field>
            <DialogFooter>
              <Button className="bg-blue-600 text-white" type="submit">
                Cadastrar
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      }
    </>
  );
}