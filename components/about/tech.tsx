import Image from "next/image";
const RECURSOS = [
  "Localização por GPS",
  "Sensor de Movimento",
  "Integração com Câmera",
  "Sensor Sonoro",
];

export default function AboutTech() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center">
      <h1 className="h2 md:h1">
        Utilizamos a <span className="h2 md:h1 text-button-primary">Tecnologia</span> como
        uma ferramenta de aproximação entre{" "}
        <span className="h2 md:h1 text-button-primary">Tutores</span> e{" "}
        <span className="h2 md:h1 text-button-primary">Pets</span>.
      </h1>
      <p className="body-1 md:text-xl mx-auto mt-4 max-w-xl text-muted-foreground">
        Buscamos oferecer uma experiência acessível, intuitiva e compatível
        com diferentes dispositivos já presentes no mercado.
      </p>

      <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <ul className="space-y-4 text-left">
          {RECURSOS.map((item) => (
            <li key={item} className="text-xl font-semibold text-button-primary">
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto flex items-center justify-center gap-4">
          <Image
            src="/assets/about/collar.png"
            alt="Coleira Petify"
            width={450}
            height={450}
            className="h-auto w-2/3 object-contain"
          />
          <Image
            src="/assets/about/pingent.png"
            alt="Pingente Petify"
            width={450}
            height={450}
            className="h-auto w-2/3 object-contain"
          />
        </div>
      </div>
    </section>
  );
}