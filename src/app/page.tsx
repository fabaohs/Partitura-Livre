"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import Link from "next/link";

async function getSheets() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/graphql/`;

  const mutation = gql`
    query {
      sheets {
        author
        title
      }
    }
  `;
  const response: { sheets: Array<{ author: string; title: string }> } =
    await request(url, mutation);

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
    <main className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-black antialiased text-center">
        Partitura Livre
      </h1>
      <Link href="/AddSheet">
        <Button variant="outline">Adicionar partitura</Button>
      </Link>
      <div>
        {isLoading && <p>Carregando...</p>}
        {data &&
          data.length > 0 &&
          data?.map((sheet) => (
            <div key={sheet.title} className="flex flex-col gap-2">
              <p>Title: {sheet.title}</p>
              <p>Author: {sheet.author}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
