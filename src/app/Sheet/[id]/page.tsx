import Link from "next/link";

interface iProps {
  params: { id: string };
}

export default function SheetPage({ params }: iProps) {
  return (
    <>
      <Link href="/">Voltar</Link>
      <p>Sheet with id: {params.id}</p>
    </>
  );
}
