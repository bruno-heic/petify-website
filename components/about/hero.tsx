import Image from "next/image";
import { Thermometer, Clock, ShieldAlert } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:pt-20">
      <p className="h1 text-foreground">
        A <span className="font-bold text-button-primary">Petify</span> nasceu da
        união entre tecnologia, inovação e amor pelos animais.
      </p>
      <p className="body-1 text-xl mt-3 text-muted-foreground">
        Nosso objetivo é oferecer aos tutores uma forma prática, segura e
        inteligente de acompanhar a rotina e o bem-estar de seus pets, mesmo
        à distância.
      </p>

      <div className="relative mx-auto mt-16 w-[clamp(280px,68vw,460px)]">
        <div className="animate-float-phone relative aspect-[9/19.5] w-full">
          <div className="absolute inset-[4.5%_5%] overflow-hidden rounded-[9%]">
            <Image
              src="/assets/about/screen-about.png"
              alt="Tela do app Petify mostrando o monitoramento do pet"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 68vw, 460px"
            />
          </div>
          <Image
            src="/assets/about/iPhone 16.png"
            alt=""
            fill
            priority
            className="pointer-events-none z-10 object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 68vw, 460px"
          />
        </div>

        <div className="animate-float-1 absolute -left-[8%] top-[4%] z-20 flex w-[clamp(150px,42%,230px)] items-center gap-2 rounded-2xl bg-emerald-50 p-[6%] shadow-md">
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

        <div className="animate-float-2 absolute -left-[12%] top-[46%] z-20 flex w-[clamp(150px,42%,230px)] -translate-y-1/2 items-center gap-2 rounded-2xl bg-blue-50 p-[6%] shadow-md">
          <Clock className="h-[clamp(18px,4.5vw,26px)] w-[clamp(18px,4.5vw,26px)] shrink-0 text-blue-600" />
          <div className="text-left">
            <p className="text-[clamp(10px,2.1vw,13px)] leading-tight text-blue-700">
              Horas monitoradas
            </p>
            <p className="text-[clamp(14px,3.2vw,20px)] font-semibold leading-tight text-blue-800">
              69h
            </p>
          </div>
        </div>
        <div className="animate-float-3 absolute -right-[8%] bottom-[14%] z-20 flex w-[clamp(120px,34%,180px)] items-center gap-2 rounded-2xl bg-rose-50 p-[6%] shadow-md">
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