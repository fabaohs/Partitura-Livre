"use client";

import { SessionProvider as Provider } from "next-auth/react";

interface iProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: iProps) {
  return <Provider>{children}</Provider>;
}
