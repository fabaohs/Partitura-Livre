import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2">
      <h1 className="text-4xl font-black antialiased text-center">
        Partitura Livre
      </h1>
      <Link href="/AddSheet">
        <Button variant="outline">Adicionar partitura</Button>
      </Link>
      <div>
        <p className="text-accent-foreground">Lista das partituras aqui...</p>
      </div>
    </main>
  );
}
