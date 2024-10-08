﻿"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import * as Google from "../../../public/google.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string({ required_error: "Preencha o email" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "Digite sua senha" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

type Login = z.infer<typeof schema>;

// IS FOR CUSTOM LOGIN
export default function LoginForm() {
  const { status } = useSession();
  const { push: redirect } = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      redirect("/Sheet");
    }
  }, [status]);

  const form = useForm<Login>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, control } = form;

  async function submit(data: Login) {
    console.log("Submiting");
    console.log(data);

    // USE NEXT AUTH TO SIGN IN
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
  }

  function handleGoogleClick() {
    signIn("google");
  }

  function handleGithubClick() {
    signIn("github");
  }

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-xl font-bold mb-2">Entre com</h1>
        <div className="space-x-4">
          <Button className="space-x-2" onClick={handleGoogleClick}>
            <Image src={Google} width={15} height={15} alt="google logo" />{" "}
            <p className="font-bold">Entrar com Google</p>
          </Button>
          <Button className="space-x-2" onClick={handleGithubClick}>
            <GitHubLogoIcon />
            <p className="font-bold">Entrar com Github</p>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center my-4">
        <Separator className="w-[46%]" />

        <p className="text-center text-foreground">Ou</p>

        <Separator className="w-[46%]" />
      </div>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(submit)();
          }}
          className="space-y-4"
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Email</Label>
                <Input {...field} id="email" placeholder="email@email.com" />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="password">Senha</Label>
                <Input
                  {...field}
                  id="password"
                  placeholder="Digite sua senha"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Entrar</Button>
        </form>
      </Form>
    </>
  );
}
