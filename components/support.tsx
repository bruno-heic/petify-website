import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: { prefix: "Pet'", highlight: "it" },
    image: "/assets/petit.png",
    href: "/product/petit",
  },
  {
    name: { prefix: "Paw", highlight: "dant" },
    image: "/assets/pawdant.png",
    href: "/product/pawdant",
  },
];

const faqs = [
  {
    question: "A coleira funciona sem internet?",
    answer:
      "A coleira continua registrando informações localmente, mas para enviar dados em tempo real ao aplicativo é necessária conexão com a internet.",
  },
  {
    question: "Quais informações a coleira monitora?",
    answer:
      "Temperatura corporal, localização em tempo real, atividade física, padrões de sono e alertas personalizados.",
  },
  {
    question: "Quanto tempo dura a bateria?",
    answer:
      "A autonomia pode chegar a cinco dias dependendo da frequência de uso e atualização da localização.",
  },
  {
    question: "Posso usar a coleira em cães e gatos?",
    answer:
      "Sim. A coleira foi desenvolvida para diferentes portes de cães e gatos.",
  },
];

export default function Support() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* ── HEADER ── */}
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Suporte da <span className="text-button-primary">Petify</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Precisa de ajuda? Comece por aqui.
        </p>
      </div>

      {/* ── PRODUCT SELECTOR ── */}
      <div className="flex justify-center gap-20 md:gap-32">
        {products.map((p) => (
            <div key={p.name.prefix} className="flex items-center justify-center flex-col">
                <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
                <Image
                    src={p.image}
                    alt={p.name.prefix + p.name.highlight}
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                />
                </div>
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                {p.name.prefix}
                <span className="text-button-primary">{p.name.highlight}</span>
                </p>
            </div>
        ))}
      </div>

      {/* ── SERVICE & REPAIR CARD ── */}
      <div className="rounded-3xl bg-gray-50 border border-border p-10 md:p-12 flex flex-col gap-5">
        <p className="text-2xl md:text-3xl font-bold text-foreground">
          Serviço e reparo da{" "}
          <span className="text-button-primary">Petify</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm">
          Podemos ajudar você a encontrar seu erro ou defeito, com especialistas
          confiáveis próprios da{" "}
          <span className="text-button-primary">
            Petify
          </span>
          .
        </p>
        <div className="flex justify-end mt-4">
          <Link
            href="mailto:petify.help@gmail.com"
            className="text-base md:text-lg text-button-primary font-medium"
          >
            Solicitar um reparo &gt;
          </Link>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          <span className="text-button-primary">Fale</span> conosco
        </h2>
        <p className="text-lg md:text-xl font-semibold text-foreground max-w-xl leading-snug">
          Obtenha ajuda para todos os seus produtos{" "}
          <span className="text-button-primary">Petify</span> com o email
          oficial de suporte.
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Nosso atendimento técnico e operacional é realizado exclusivamente de
          segunda a sexta, das 10h às 16h, através do e-mail{" "}
          <Link
            href="mailto:petify.help@gmail.com"
            className="text-button-primary hover:underline"
          >
            (petify.help@gmail.com)
          </Link>
        </p>
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Perguntas <span className="text-button-primary">Frequentes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            Tire suas dúvidas relacionadas aos serviços e produtos da Petify.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-white px-7 py-6 flex flex-col gap-1.5"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground">
                {faq.question}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}