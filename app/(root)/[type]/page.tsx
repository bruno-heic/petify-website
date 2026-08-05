"use client"
import { useParams } from "next/navigation";

const Page = () => {
  const { type } = useParams();

  if (type === "about") return "about";
  if (type === "products") return "product";
  if (type === "support") return "support";

  return <div>Página não encontrada</div>;
}

export default Page;