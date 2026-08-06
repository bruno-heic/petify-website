import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    title: "Localização atual",
    description: "Monitore em tempo real onde seu pet está, com atualizações precisas do valor.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
    title: "Temperatura corporal",
    description: "Acompanhe a temperatura do seu pet e receba alertas caso esteja fora do normal.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Relatórios mensais",
    description: "Visualize o histórico completo de saúde e comportamento do seu pet ao longo do mês.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Avisos de anomalias",
    description: "Receba notificações em caso de qualquer alteração fora do normal.",
  },
];

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Saúde em dia",
    description: "Acompanhe registros diários e cheque métricas a qualquer minuto.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Rotina organizada",
    description: "Consulte relatórios mensais e gerencie histórico de anomalias.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
    title: "Tudo sincronizado",
    description: "Acesse de qualquer lugar e tenha tudo sempre com você.",
  },
];

const Main = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="px-6 md:px-14 lg:px-20 py-12 md:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-6">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-7 max-w-xl">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              O cuidado do seu pet
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-button-primary leading-tight">
              Na palma da sua mão
            </h1>
          </div>

          <p className="text-base md:text-lg text-muted-foreground">
            O Petify ajuda você a monitorar a saúde bem-estar e rotina do seu pet de forma simples e organizada.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-5">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-11 h-11 rounded-full bg-blue-50 text-button-primary flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{f.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Store buttons */}
          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              href="#"
              className="flex items-center gap-2.5 px-5 py-3 bg-foreground text-background rounded-xl hover:opacity-80 transition-opacity"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[11px] leading-none opacity-70">Download on the</p>
                <p className="text-base font-semibold leading-tight">App Store</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2.5 px-5 py-3 bg-foreground text-background rounded-xl hover:opacity-80 transition-opacity"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.61-2.61-10.5 9.46zM.67 1.28C.25 1.67 0 2.29 0 3.1v17.8c0 .81.25 1.43.67 1.82l.09.09 9.97-9.97v-.23L.76 1.19l-.09.09zM20.33 10.53l-2.83-1.63-2.94 2.94 2.94 2.94 2.85-1.64c.81-.47.81-1.23-.02-1.61zM3.18.24L15.3 7.23l-2.61 2.61L2.17.38C2.52.3 2.88.07 3.18.24z"/>
              </svg>
              <div className="text-left">
                <p className="text-[11px] leading-none opacity-70">GET IT ON</p>
                <p className="text-base font-semibold leading-tight">Google Play</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right: mockup */}
        <div className="flex-1 flex justify-center items-center relative">
            <Image src="/assets/main-page-image.png" alt="main-page-image" width={700} height={700}  />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="px-6 md:px-14 lg:px-20 py-16 flex flex-col items-center gap-14">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tudo que você precisa em{" "}
            <span className="text-button-primary">um só lugar</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Recursos completos para o bem-estar do seu pet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-4xl">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-50 text-button-primary flex items-center justify-center">
                {b.icon}
              </div>
              <p className="text-lg font-semibold text-foreground">{b.title}</p>
              <p className="text-sm md:text-base text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Main;