import { Eyebrow } from "@/components/Eyebrow";
import { differentials } from "@/data/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-surface-2 px-6 py-16">
      <div className="container">
        <div className="mb-11 max-w-[56ch]">
          <Eyebrow>Por que Henrry Cell</Eyebrow>
          <h2 className="text-[clamp(26px,3vw,34px)]">O que sustenta 5 anos de bairro</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div key={item.number} className="flex flex-col gap-2.5">
              <span className="font-mono text-xs text-brand-deep">{item.number}</span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-[13.6px] text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
