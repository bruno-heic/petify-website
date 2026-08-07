"use client"
import { useParams } from "next/navigation";
import About from "@/components/about-page";
import Support from "@/components/support";

const Page = () => {
  const { type } = useParams();

  if (type === "about") return <About/>;
  if (type === "products") return "product";
  if (type === "support") return <Support/>;

  return <div>Página não encontrada</div>;
}

export default Page;