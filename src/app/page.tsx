import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full">
      <Card className="max-w-[40rem] mx-auto">
        <CardHeader>
          <CardTitle className="font-black text-2xl">Partitura Livre</CardTitle>
          <CardDescription>Entre com sua conta</CardDescription>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
