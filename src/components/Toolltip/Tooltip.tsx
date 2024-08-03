import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface iTooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: iTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipComponent>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
}
