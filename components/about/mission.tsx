import Image from "next/image";
export default function AboutMission() {
  return (
    <section className="h2 md:h1 mx-auto max-w-3xl px-5 pb-16 text-center">
      <h1 className="h2 md:h1">
        <span className="h2 md:h1 text-button-primary">Inovação</span> e{" "}
        <span className="h2 md:h1 text-button-primary">Cuidado</span> devem andar juntos.
      </h1>
      <p className="body-1 md:text-xl mx-auto mt-4 text-muted-foreground">
        Buscamos desenvolver soluções que contribuam para a segurança, a
        qualidade de vida e o bem-estar dos animais, fortalecendo o vínculo
        entre pets e seus tutores.
      </p>

      <Image
        src="/assets/about/inovacao.png"
        alt="Tutor com seu pet"
        width={900}
        height={500}
        className="mx-auto mt-8 w-full max-w-md rounded-2xl object-cover"
      />
    </section>
  );
}
