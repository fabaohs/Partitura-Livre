import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/contexts/QueryContext";
import SessionProvider from "@/contexts/SessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partitura Livre",
  description:
    "Partitura Livre é um site para compartilhamento de partituras musicais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <SessionProvider>
        <ReactQueryProvider>
          <body className={`${inter.className} dark min-h-screen p-24`}>
            {children}
          </body>
        </ReactQueryProvider>
      </SessionProvider>
    </html>
  );
}
