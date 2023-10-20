"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import { useMessage } from "@/hooks/useMessage";
import { MessageRoot } from "@/components/message/message-root";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import pt from "date-fns/locale/pt";
import { Grupo } from "@/types";
import api from "@/services/api";
import { redirect } from "next/navigation";

registerLocale("pt", pt);

const schema = z.object({
  description: z.string()
    .nonempty("A descrição é obrigatória"),
  period: z.date({
    required_error: "O período é obrigatório",
  }),
});

export default function EditarGrupo({ params }: { params: { id: number } }) {
  const { message, showMessage, hideMessage } = useMessage();

  const createGrupo = useForm<Grupo>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = createGrupo;

  async function atualizarGrupo(grupo: Grupo) {
    await api.post(`http://localhost:8080/grupo/${grupo.id}`, grupo);
    redirect("/grupo");
  }

  return (
    <>
      <MessageRoot value={message} />

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
            <Form.Label htmlFor="description">
              Descrição
            </Form.Label>
            <Form.TextField name="description" />
            <Form.ErrorMessage field="description" />
          </Form.Field>
          <DialogFooter>
            <Button type="submit">
              Cadastrar
            </Button>
          </DialogFooter>
        </form>
      </FormProvider>
    </>
  );
}