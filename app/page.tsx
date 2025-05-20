import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <Button>Click me</Button>
      <Button disabled>Click me</Button>
    </div>
  );
}
