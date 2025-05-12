import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      landing
      <Link href="/admin" className="bg-red-500 p-2 m-2">
        admin landing
      </Link>
      <Link href="/ceo" className="bg-yellow-200 p-2 m-2">
        {" "}
        ceo landing
      </Link>
      <Link href="/company" className="bg-green-300 p-2 m-2">
        {" "}
        company landing
      </Link>
      <Link href="/dashboard" className="bg-blue-700 p-2 m-2">
        {" "}
        dashboard landing
      </Link>
      <Button>Click me</Button>
      <ThemeButton></ThemeButton>
    </div>
  );
}
