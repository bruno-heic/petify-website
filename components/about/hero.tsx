import { Thermometer, Clock, ShieldAlert } from "lucide-react";


export default function AboutHero() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-14 text-center sm:pt-20">
      <p className="body-1 text-foreground">
        A <span className="font-bold text-blue-600">Petify</span> nasceu da
        união entre tecnologia, inovação e amor pelos animais.
      </p>
      <p className="body-2 mt-3 text-muted-foreground">
        Nosso objetivo é oferecer aos tutores uma forma prática, segura e
        inteligente de acompanhar a rotina e o bem-estar de seus pets, mesmo
        à distância.
      </p>

      {/* Container fluido: cresce suavemente com a tela, sem "pulos" de breakpoint */}
      <div className="relative mx-auto mt-16 w-[clamp(260px,60vw,420px)]">
        {/* Celular: aspect-ratio mantém a proporção de tela enquanto w-full acompanha o container */}
        <div className="relative aspect-[9/19] w-full rounded-[10%] border-4 border-neutral-900 bg-white shadow-xl">
          <div className="flex h-full w-full items-center justify-center rounded-[8%] border-2 border-dashed border-blue-300 bg-neutral-50 p-2 text-center">
            <span className="text-[clamp(11px,2.4vw,14px)] text-muted-foreground">
              PNG da tela do app
              <br />
              phone-about.png
            </span>
          </div>
          {/* <Image src="/assets/about/phone-about.png" alt="Tela do app Petify" fill className="object-contain rounded-[8%]" /> */}
        </div>

        {/* Cartão: temperatura corporal — posição e tamanho em %, acompanham o container */}
        <div className="absolute -left-[8%] top-[4%] flex w-[clamp(150px,42%,230px)] items-center gap-2 rounded-2xl bg-emerald-50 p-[6%] shadow-md">
          <Thermometer className="h-[clamp(18px,4.5vw,26px)] w-[clamp(18px,4.5vw,26px)] shrink-0 text-emerald-600" />
          <div className="text-left">
            <p className="text-[clamp(10px,2.1vw,13px)] leading-tight text-emerald-700">
              Temperatura corporal
            </p>
            <p className="text-[clamp(14px,3.2vw,20px)] font-semibold leading-tight text-emerald-800">
              36°C
            </p>
          </div>
        </div>

        {/* Cartão: horas monitoradas */}
        <div className="absolute -left-[12%] top-[46%] flex w-[clamp(150px,42%,230px)] -translate-y-1/2 items-center gap-2 rounded-2xl bg-blue-50 p-[6%] shadow-md">
          <Clock className="h-[clamp(18px,4.5vw,26px)] w-[clamp(18px,4.5vw,26px)] shrink-0 text-blue-600" />
          <div className="text-left">
            <p className="text-[clamp(10px,2.1vw,13px)] leading-tight text-blue-700">
              Horas monitoradas
            </p>
            <p className="text-[clamp(14px,3.2vw,20px)] font-semibold leading-tight text-blue-800">
              679h
            </p>
          </div>
        </div>

        {/* Cartão: alertas */}
        <div className="absolute -right-[8%] bottom-[14%] flex w-[clamp(120px,34%,180px)] items-center gap-2 rounded-2xl bg-rose-50 p-[6%] shadow-md">
          <ShieldAlert className="h-[clamp(18px,4.5vw,26px)] w-[clamp(18px,4.5vw,26px)] shrink-0 text-rose-600" />
          <div className="text-left">
            <p className="text-[clamp(10px,2.1vw,13px)] leading-tight text-rose-700">Alertas</p>
            <p className="text-[clamp(14px,3.2vw,20px)] font-semibold leading-tight text-rose-800">
              25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}