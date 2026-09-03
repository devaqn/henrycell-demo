import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/utils";
import { instagramStats, instagramUrl } from "@/data/content";

export function SocialProof() {
  return (
    <section id="instagram" className="px-6 py-16">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <div>
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="text-[clamp(26px,3vw,34px)]">
            13,9 mil pessoas já acompanham o dia a dia da loja
          </h2>
          <p className="mt-4 max-w-[46ch] text-[17px] text-muted-foreground">
            Isso é audiência que confia — um site próprio aproveita esse alcance pra também
            aparecer quando alguém pesquisa <strong className="text-foreground">"assistência técnica iPhone"</strong>{" "}
            ou <strong className="text-foreground">"loja de celular Piedade"</strong> no Google, sem
            depender só do algoritmo do Instagram.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-[conic-gradient(from_200deg,#ffdd55,#ff543e_25%,#c837ab_55%,#6a5ae0_80%,#ffdd55)] p-[2.5px]">
              <div className="h-full w-full rounded-full bg-surface-2" />
            </div>
            <div>
              <div className="text-[15px] font-semibold">henrry.cell</div>
              <div className="text-[12.5px] text-muted-foreground">
                Henrry Cell 🍎 · Assistência técnica
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-5 border-t border-border pt-4">
            {instagramStats.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-[19px]">{stat.value}</b>
                <span className="text-[11.5px] text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "primary" }), "mt-5 w-full")}
          >
            Ver perfil no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
