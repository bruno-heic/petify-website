const TEAM = ["Bruno G.", "Agno S.", "Gustavo M.", "Heloisa M.", "Laura L."];

export default function AboutTeam() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
      <h2 className="h2 md:h1">
        Conheça nossa <span className="h2 md:h1 text-button-primary">Equipe</span>.
      </h2>
      <p className="body-1 md:text-xl mx-auto mt-4  text-muted-foreground">
        Nós criamos a Petify para resolver problemas que vivemos diariamente.
        Nossa experiência real possibilitou o desenvolvimento de um projeto
        verdadeiramente conectado com as dores de quem cuida de animais.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {TEAM.map((name) => (
          <span key={name} className="subtitle-1 text-foreground">
            {name}
          </span>
        ))}
      </div>

      <p className="caption mt-6 text-muted-foreground">
        Alunos da Escola Técnica Estadual de Taboão da Serra
        <br />
        Projeto de Trabalho de Conclusão de Curso
      </p>
    </section>
  );
}
