import { ArrowUpRight } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { stores } from "@/data/content";

export function Stores() {
  return (
    <section id="lojas" className="px-6 py-16">
      <div className="container">
        <div className="mb-11 max-w-[56ch]">
          <Eyebrow>Onde estamos</Eyebrow>
          <h2 className="text-[clamp(26px,3vw,34px)]">Duas lojas, sempre perto de você</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {stores.map((store) => (
            <div
              key={store.label}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{store.name}</h3>
                <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {store.label}
                </span>
              </div>
              <p className="text-[14.5px] text-muted-foreground">
                {store.street}
                <span className="mt-1 block font-mono text-[13px] text-muted-foreground/80">
                  {store.neighborhood}
                </span>
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 text-[13.5px] font-semibold text-brand-deep hover:underline"
              >
                Abrir no mapa <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
