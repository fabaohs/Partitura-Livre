"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import Link from "next/link";

type Sheet = {
  author: string;
  title: string;
  id: string; // UUID
};

async function getSheets() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/graphql/`;

  const query = gql`
    query {
      sheets {
        author
        title
        id
      }
    }
  `;

  const response: { sheets: Array<Sheet> } = await request(url, query);

  console.log("response");
  console.log(response.sheets);

  return response.sheets;
}

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["getSheets"],
    queryFn: () => getSheets(),
  });

  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-black antialiased text-center">
        Partitura Livre
      </h1>
      <Link href="/AddSheet">
        <Button variant="outline">Adicionar partitura</Button>
      </Link>
      <div className="flex gap-4">
        {isLoading && <p>Carregando...</p>}
        {data &&
          data.length > 0 &&
          data?.map((sheet) => (
            <Card key={sheet.id}>
              <CardHeader>
                <CardTitle>{sheet.title}</CardTitle>
                <CardDescription>{sheet.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/Sheet/${sheet.id}`}>
                  <Button variant="outline">Visualizar</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>
    </main>
  );
}
