import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Skeleton className="h-8 w-32 rounded-md" />
          </div>
          <form className="grid gap-4">
            <Skeleton className="h-10 rounded-md" />
            <Skeleton className="h-10 rounded-md" />
            <Skeleton className="h-10 rounded-md" />
          </form>
        </div>
      </div>
    </div>
  );
}
