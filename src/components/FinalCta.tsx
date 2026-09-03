import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactEmail, instagramUrl } from "@/data/content";

export function FinalCta() {
  return (
    <section className="bg-[linear-gradient(165deg,#0b1310_0%,#0d1a13_100%)] px-6 py-24 text-center">
      <div className="container">
        <h2 className="mx-auto max-w-2xl text-[clamp(26px,3.4vw,36px)] text-[#f4fff8]">
          Essa é só uma prévia do que um domínio próprio faz pela loja.
        </h2>
        <p className="mx-auto mt-3.5 max-w-[52ch] text-[15.5px] text-[#a9c9b7]">
          Layout, cores e conteúdo pensados a partir do que a Henrry Cell já construiu no
          Instagram — faltando só colocar no ar com domínio, SEO local e ficha no Google Meu
          Negócio.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Chamar devaqn no Instagram
          </a>
          <a href={`mailto:${contactEmail}`} className={cn(buttonVariants({ variant: "dark", size: "lg" }))}>
            {contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
