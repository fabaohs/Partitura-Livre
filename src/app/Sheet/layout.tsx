import LogoutBtn from "./components/LogoutBtn";

interface iProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: iProps) {
  return (
    <div className="w-full h-full">
      <LogoutBtn />
      {children}
    </div>
  );
}
