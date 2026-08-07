import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  HeartPulse,
  Droplets,
  MapPin,
  Moon,
  BellRing,
  Clock,
  Check,
  X,
} from "lucide-react";

const products = [
  {
    name: "Pet'it",
    tagline: "Coleira completa para monitorar seu pet.",
    image: "/assets/petit.png",
    price: "R$ 409,90",
    installment: "ou 12x de R$ 34,15 sem juros",
    href: "",
    features: [
      { icon: Activity, title: "Monitora sinais vitais", desc: "Receba alertas imediatos em caso de qualquer alteração fora do normal." },
      { icon: HeartPulse, title: "Monitora sinais vitais", desc: "Receba alertas imediatos em caso de qualquer alteração fora do normal." },
      { icon: Droplets, title: "Resistente à água", desc: "Perfeita para todos os momentos do dia." },
      { icon: MapPin, title: "Localização em tempo real", desc: "Acompanhe cada passo do seu pet." },
      { icon: Moon, title: "Monitoramento de sono", desc: "Entenda a qualidade de sono e descanso do seu pet." },
      { icon: BellRing, title: "Alertas inteligentes", desc: "Notificações de saúde, fugas e comportamentos." },
    ],
  },
  {
    name: "Pingente Pawdant",
    tagline: "Localização simples e compacta para o essencial.",
    image: "/assets/pawdant.png",
    price: "R$ 409,90",
    installment: "ou 12x de R$ 34,15 sem juros",
    href: "",
    features: [
      { icon: HeartPulse, title: "Monitora sinais vitais", desc: "Receba alertas imediatos em caso de qualquer alteração fora do normal." },
      { icon: Droplets, title: "Resistente à água", desc: "Perfeita para todos os momentos do dia." },
      { icon: MapPin, title: "Localização em tempo real", desc: "Acompanhe cada passo do seu pet." },
      { icon: Clock, title: "Bateria de longa duração", desc: "Uso contínuo sem preocupação com recarga." },
    ],
  },
];

const kitRows = [
  { label: "Localização em tempo real", Pawdant: true, petIt: true },
  { label: "Temperatura corporal", Pawdant: false, petIt: true },
  { label: "Relatórios mensais", Pawdant: true, petIt: true },
  { label: "Área de segurança", Pawdant: false, petIt: true },
  { label: "Alertas sonoros", Pawdant: true, petMapetItis: true },
  { label: "Rotina organizada", Pawdant: false, petIt: true },
  { label: "Tudo sincronizado", Pawdant: true, petIt: true },
];

export default function PetTechSection() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">
      <div className="flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Tecnologia que se adapta ao{" "}
          <span className="text-button-primary">seu pet</span> e ao seu dia
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Dispositivos inteligentes para você viver mais tranquilo e perto do
          seu melhor amigo.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <div className="w-full md:w-1/3 flex items-center justify-center shrink-0">
              <Image
                src={p.image}
                alt={p.name}
                width={500}
                height={500}
                className="object-contain w-full max-w-[280px]"
              />
            </div>

            <div className="flex flex-col gap-6 flex-1 w-full">
              <div>
                <p className="text-4xl font-bold text-foreground">
                  {p.name}
                </p>
                <p className="text-lg text-muted-foreground mt-1 max-w-xs">
                  {p.tagline}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-5">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <f.icon className="h-4 w-4 shrink-0 text-button-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground leading-tight">
                        {f.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-snug mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 mt-2">
                {p.price ? (
                  <div className="rounded-full border border-border px-5 py-2">
                    <p className="text-base font-bold text-foreground leading-none">
                      {p.price}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-0.5">
                      {p.installment}
                    </p>
                  </div>
                ) : (
                  <span />
                )}
                <Link
                  href={p.href}
                  className="rounded-full bg-button-primary px-8 py-3 text-sm font-semibold text-white"
                >
                  Em breve
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Kits feitos para cada{" "}
            <span className="text-button-primary">momento do seu pet</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            Escolha o kit ideal para você e sua família.
          </p>
        </div>

        <div className="rounded-3xl bg-gray-50 border border-border p-8 md:p-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-3 pt-14">
              {kitRows.map((row) => (
                <p
                  key={row.label}
                  className="text-sm text-muted-foreground h-6 flex items-center"
                >
                  {row.label}
                </p>
              ))}
            </div>

            {(["Pawdant", "Pet'it"] as const).map((plan, i) => (
              <div
                key={plan}
                className={`flex flex-col gap-3 rounded-2xl bg-white p-4 ${
                  i === 1 ? "border border-button-primary" : "border border-border"
                }`}
              >
                <p className="text-lg font-bold text-foreground text-center pb-2">
                  {plan}
                </p>
                {kitRows.map((row) => {
                  const ok = i === 0 ? row.Pawdant : row.petIt;
                  return (
                    <div key={row.label} className="h-6 flex items-center justify-center">
                      {ok ? (
                        <Check className="h-4 w-4 text-button-primary" />
                      ) : (
                        <X className="h-4 w-4 text-gray-300" />
                      )}
                    </div>
                  );
                })}
                <Link
                  href={''}
                  className="mt-2 rounded-full bg-button-primary py-2 text-sm font-semibold text-white text-center"
                >
                  Em breve
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}