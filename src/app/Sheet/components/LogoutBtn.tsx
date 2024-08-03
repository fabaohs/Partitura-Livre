"use client";

import { Tooltip } from "@/components/Toolltip/Tooltip";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <Tooltip text="Sair">
      <Button onClick={() => signOut()}>
        <LogOut className="h-4 w-4" />
      </Button>
    </Tooltip>
  );
}
