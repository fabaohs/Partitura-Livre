"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ArrowLeftIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useMutation } from "@tanstack/react-query";

const schema = z.object({
  title: z
    .string({ required_error: "Título é obrigatório" })
    .min(3, { message: "Título deve ter no mínimo 3 caracteres" }),
  author: z
    .string({ required_error: "Autor é obrigatório" })
    .min(3, { message: "Autor deve ter no mínimo 3 caracteres" }),
});

type Sheet = z.infer<typeof schema>;

async function addSheet(data: Sheet) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/sheets/addSheet`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return response;
}

export default function AddSheet() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["addSheet"],
    mutationFn: addSheet,
  });

  const form = useForm<Sheet>({
    resolver: zodResolver(schema),
  });

  async function handleSubmit(data: Sheet) {
    await mutateAsync(data);
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant={"outline"}>
        <Link href="/" className="flex gap-2 items-center">
          <ArrowLeftIcon />
          Voltar
        </Link>
      </Button>

      <p className="font-bold antialiased mt-4">Adicionar partitura</p>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(handleSubmit)();
          }}
          className="flex flex-col gap-4 border border-muted p-4 rounded-md"
        >
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="title">Título</Label>
                <Input {...field} id="title" placeholder="Nocturne n1..." />
                <FormMessage className="font-bold" />
              </FormItem>
            )}
          />
          <FormField
            name="author"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="author">Autor</Label>
                <Input {...field} id="autor" placeholder="Frederic Chopin" />
                <FormMessage className="font-bold" />
              </FormItem>
            )}
          />{" "}
          <Button type="submit" disabled={isPending}>
            {isPending ? <ReloadIcon className="animate-spin mr-2" /> : null}
            Adicionar
          </Button>
        </form>
      </Form>
    </div>
  );
}
