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
import { Grupo } from "@/types";
import api from "@/services/api";
import { redirect, useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch";

registerLocale("pt", pt);

const schema = z.object({
  titulo: z.string()
    .nonempty("O título é obrigatório"),
  imagem: z.string()
    .nonempty("Informe um link da imagem"),
});

export default function EditarGrupo({ params }: {
  params: {
    id: number
  }
}) {
  const router = useRouter();

  const { data, isLoading } = useFetch<Grupo>(`http://localhost:8080/grupo/${params.id}`);

  const createGrupo = useForm<Grupo>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = createGrupo;

  async function atualizarGrupo(grupo: Grupo) {
    await api.put(`http://localhost:8080/grupo/${data?.id}`, grupo);
    router.push("/grupo");
  }

  return (
    <>
      <FormProvider {...createGrupo}>
        <form onSubmit={handleSubmit(atualizarGrupo)} className="grid gap-4">
          <Form.Field>
            <Form.Label htmlFor="titulo">
              Título
            </Form.Label>
            <Form.TextField name="titulo" />
            <Form.ErrorMessage field="titulo" />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="imagem">
              URL da imagem
            </Form.Label>
            <Form.TextField name="imagem" />
            <Form.ErrorMessage field="imagem" />
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