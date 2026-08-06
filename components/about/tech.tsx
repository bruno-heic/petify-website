const RECURSOS = [
  "Localização por GPS",
  "Sensor de Movimento",
  "Integração com Câmera",
  "Sensor Sonoro",
];

export default function AboutTech() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center">
      <h2 className="h2">
        Utilizamos a <span className="text-blue-600">Tecnologia</span> como
        uma ferramenta de aproximação entre{" "}
        <span className="text-blue-600">Tutores</span> e{" "}
        <span className="text-blue-600">Pets</span>.
      </h2>
      <p className="body-2 mx-auto mt-4 max-w-xl text-muted-foreground">
        Buscamos oferecer uma experiência acessível, intuitiva e compatível
        com diferentes dispositivos já presentes no mercado.
      </p>

      <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <ul className="space-y-4 text-left">
          {RECURSOS.map((item) => (
            <li key={item} className="subtitle-1 text-blue-600">
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border-2 border-dashed border-blue-300 bg-neutral-50">
          <span className="body-2 text-center text-muted-foreground">
            Foto da coleira
            <br />
            collar.png
          </span>
        </div>
        {/* <Image src="/assets/about/collar.png" alt="Coleira Petify" width={220} height={220} className="object-contain" /> */}
      </div>
    </section>
  );
}