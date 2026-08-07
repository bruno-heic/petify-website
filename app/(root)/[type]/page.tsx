"use client"
import { useParams } from "next/navigation";
import About from "@/components/about";
import Support from "@/components/support";
import Products from "@/components/products"
const Page = () => {
  const { type } = useParams();

  if (type === "about") return <About/>;
  if (type === "products") return <Products/>;
  if (type === "support") return <Support/>;

  return <div>Página não encontrada</div>;
}

export default Page;