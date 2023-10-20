"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import pt from "date-fns/locale/pt";
import { Grupo, Setor } from "@/types";
import api from "@/services/api";
import { redirect, useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

registerLocale("pt", pt);

export default function EditarGrupo({ params }: {
  params: {
    id: number
  }
}) {
  const router = useRouter();

  const { data: setorData, isLoading: isSetorLoading } = useFetch<Setor>(`http://localhost:8080/setor/${params.id}`);
  const { data: grupoData, isLoading: isGrupoLoading } = useFetch<Grupo[]>("http://localhost:8080/grupo");



  const schema = z.object({
    descricao: z.string()
      .nonempty("A descricao é obrigatória"),
  });

  const createSetor = useForm<Setor>({
    resolver: zodResolver(schema),
    defaultValues: setorData
  });

  const { handleSubmit } = createSetor;

  async function atualizarSetor(setor: Setor) {
    await api.put(`http://localhost:8080/setor/${setorData?.id}`, setor);
    router.push("/setor");
  }

  return (
    <>
      <FormProvider {...createSetor}>
        <form onSubmit={handleSubmit(atualizarSetor)} className="grid gap-4">
          <Form.Field>
            <Form.Label htmlFor="descricao">
              Descricao
            </Form.Label>
            <Form.TextField name="descricao" />
            <Form.ErrorMessage field="descricao" />
          </Form.Field>
          <Form.Field>
            <Label>Setor</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {!isGrupoLoading && grupoData!.map((grupo) => {
                    return <><SelectItem value={grupo.id.toString()}>{grupo.titulo}</SelectItem></>;
                  })}
                </SelectGroup >
              </SelectContent>
            </Select>
          </Form.Field>
          <DialogFooter>
            <Button className="bg-blue-600 text-white" type="submit">
              Atualizar
            </Button>
          </DialogFooter>
        </form>
      </FormProvider>
    </>
  );
}