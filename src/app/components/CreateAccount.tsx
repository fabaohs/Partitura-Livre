"use client";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  name: z
    .string({ required_error: "Digite seu nome" })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
});

type CreateAccount = z.infer<typeof schema>;

export function CreateAccount() {
  const form = useForm<CreateAccount>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, control } = form;

  async function submit(data: CreateAccount) {
    console.log(data);
  }

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-xl font-bold mb-2">Criar conta</h1>
        <div className="space-x-4">
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submit)();
              }}
            >
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label>Nome</Label>
                    <Input {...field} placeholder="Ex: Fulano da Silva" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label>Email</Label>
                    <Input {...field} placeholder="email@email.com" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label>Senha</Label>
                    <Input {...field} placeholder="*********" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
