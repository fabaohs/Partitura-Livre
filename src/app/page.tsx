import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-4xl font-black antialiased">Partitura Livre</h1>
      <Button variant="outline">
        <Link href="/AddSheet">Adicionar partitura</Link>
      </Button>
      <div>
        <p>Lista das partituras</p>
      </div>
    </main>
  );
}
