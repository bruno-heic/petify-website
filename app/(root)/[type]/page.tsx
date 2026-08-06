"use client"
import { useParams } from "next/navigation";
import About from "@/components/about-page";

const Page = () => {
  const { type } = useParams();

  if (type === "about") return <About/>;
  if (type === "products") return "product";
  if (type === "support") return "support";

  return <div>Página não encontrada</div>;
}

export default Page;