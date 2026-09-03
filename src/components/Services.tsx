import { BatteryCharging, Camera, CircuitBoard, ShoppingBag, Smartphone, Unlock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/content";

const icons: LucideIcon[] = [Smartphone, BatteryCharging, CircuitBoard, Unlock, Camera, ShoppingBag];

export function Services() {
  return (
    <section id="servicos" className="px-6 py-16">
      <div className="container">
        <div className="mb-11 max-w-[56ch]">
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="text-[clamp(26px,3vw,34px)]">
            Manutenção especializada em iPhone e Xiaomi
          </h2>
          <p className="mt-3 text-[15.5px] text-muted-foreground">
            Do diagnóstico à entrega, cada serviço sai com peça verificada e prazo combinado —
            nada de "leva e some".
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-tint text-brand-deep">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </div>
                <Badge variant={service.tagVariant} className="w-fit">
                  {service.tag}
                </Badge>
                <h3 className="text-[16.5px] font-semibold">{service.title}</h3>
                <p className="text-[13.8px] text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
