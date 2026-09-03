import { Check } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { instagramUrl } from "@/data/content";

const heroMeta = [
  { value: "5 anos", label: "de mercado" },
  { value: "13,9 mil", label: "seguidores" },
  { value: "2 lojas", label: "físicas" },
];

function RepairTicket() {
  const rows = [
    { k: "Aparelho", v: "iPhone 13 Pro" },
    { k: "Serviço", v: "Troca de tela" },
    { k: "Peça", v: "Original / testada" },
    { k: "Garantia", v: "90 dias" },
  ];

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <div className="flex items-center justify-between border-b border-dashed border-border px-5 py-4 font-mono text-[11.5px] tracking-wide text-muted-foreground">
        <span>TICKET #0472</span>
        <span>HENRRYCELL</span>
      </div>
      <div className="px-5 pb-2 pt-4">
        {rows.map((row) => (
          <div
            key={row.k}
            className="flex items-baseline justify-between border-b border-border/70 py-2.5 text-sm last:border-none"
          >
            <span className="text-muted-foreground">{row.k}</span>
            <span className="font-semibold">{row.v}</span>
          </div>
        ))}
        <div className="flex items-baseline justify-between py-2.5 text-sm">
          <span className="text-muted-foreground">Status</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-1 font-mono text-[11.5px] font-semibold text-brand-deep">
            <Check className="h-3 w-3" strokeWidth={3} />
            Concluído
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-surface-2 px-5 py-4 text-[13px]">
        <span>Retirada na loja</span>
        <span className="font-mono text-[15px] font-semibold text-brand-deep">Piedade</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="px-6 pb-10 pt-16">
      <div className="container grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>Assistência técnica · Piedade &amp; Cajueiro Seco</Eyebrow>

          <h1 className="text-[clamp(34px,4.6vw,52px)] leading-[1.06]">
            Seu iPhone e Xiaomi em{" "}
            <span className="text-brand-deep">mãos de quem entende</span>, com endereço fixo há 5
            anos.
          </h1>

          <p className="mt-5 max-w-[46ch] text-[17px] text-muted-foreground">
            Troca de tela, bateria, placa e desbloqueio — com peças de qualidade, garantia por
            escrito e duas lojas físicas em Piedade e Cajueiro Seco. Sem depender só do Instagram
            pra te encontrar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Chamar no Instagram →
            </a>
            <a href="#lojas" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Ver as duas lojas
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-6 font-mono text-[12.5px] text-muted-foreground">
            {heroMeta.map((item) => (
              <span key={item.label}>
                <b className="font-semibold text-foreground">{item.value}</b> {item.label}
              </span>
            ))}
          </div>
        </div>

        <RepairTicket />
      </div>
    </section>
  );
}
