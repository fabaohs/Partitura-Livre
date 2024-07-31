"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({ required_error: "Preencha o email" })
    .email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "Digite sua senha" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

type Login = z.infer<typeof schema>;

export default function LoginPage() {
  const form = useForm<Login>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, control } = form;

  async function submit(data: Login) {
    console.log("Submiting");
    console.log(data);
  }

  return (
    <div className="w-full">
      <Card className="max-w-[40rem] mx-auto">
        <CardHeader>
          <CardTitle className="font-black text-2xl">Partitura Livre</CardTitle>
          <CardDescription>Entre com sua conta</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
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
                    <Input
                      {...field}
                      id="email"
                      placeholder="email@email.com"
                    />
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
        </CardContent>
      </Card>
    </div>
  );
}
