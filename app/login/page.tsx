"use client";

import React, { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiErrorResponse } from "@/types";
import { useMessage } from "@/hooks/useMessage";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import pt from "date-fns/locale/pt";
import api from "@/services/api";
import { AxiosError } from "axios";
import { MessageRoot } from "@/components/message/message-root";
import { Form } from "@/components/form";
import Image from "next/image";
import BT from "@/public/images/logo-stado.png";
import { Button } from "@/components/ui/button";

registerLocale("pt", pt);

type UserCredentials = {
  email: string,
  password: string
}

const schema = z.object({
  email: z.string().email("Informe um email válido"),
  password: z.string().min(1, "Informe uma senha"),
});

export default function LoginForm() {
  const [open, setOpen] = useState(false);
  const { message, showMessage, hideMessage } = useMessage();

  const createLoginForm = useForm<UserCredentials>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, reset } = createLoginForm;

  async function validateLogin(userCredentials: UserCredentials) {
    await api.post("/login", userCredentials)
      .then(() => {
        reset({
          email: "",
          password: "",
        });
        hideMessage();
        setOpen(false);
      }).catch((error: AxiosError<ApiErrorResponse>) => {
        showMessage(error.response!.data.detail);
      });
  }

  return (
    <>
      <MessageRoot value={message} />

      {/*bg-[#044cb8]*/}
      <div className="flex items-center justify-center rounded-2xl border-2 h-full mt-5">
        <div className="h-full p-5 w-6/12 flex items-center justify-center">
          <Image src={BT} alt="Brasão Tocantins" width={400} height={400} />
        </div>
        <div className="h-full bg-white w-6/12 flex items-center justify-center">
          <FormProvider {...createLoginForm}>
            <form onSubmit={handleSubmit(validateLogin)} className="p-6 w-full grid gap-4">
              <h2 className="text-3xl font-bold text-center">Login</h2>
              <Form.Field>
                <Form.Label htmlFor="email">
                  Email
                </Form.Label>
                <Form.TextField name="email" />
                <Form.ErrorMessage field="email" />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor="password">
                  Senha
                </Form.Label>
                <Form.TextField name="password" />
                <Form.ErrorMessage field="password" />
              </Form.Field>

              <Button className="bg-[#044cb8] text-white h-10">Entrar</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}