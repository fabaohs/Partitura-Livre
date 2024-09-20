import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LoginForm from "./components/LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateAccount } from "./components/CreateAccount";

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
          <Tabs defaultValue="login">
            <TabsList>
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="create-account">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="create-account">
              <CreateAccount />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
