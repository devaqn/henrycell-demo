import { instagramUrl } from "@/data/content";

export function DemoBanner() {
  return (
    <div className="border-b border-[#1e2b23] bg-[#0b120e] px-6 py-2.5 text-center font-mono text-[12.5px] text-[#c9dcd1]">
      PROTÓTIPO DE DEMONSTRAÇÃO — não é o site oficial da Henrry Cell · feito por{" "}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3ed492] underline underline-offset-2"
      >
        devaqn
      </a>{" "}
      como exemplo do que um domínio próprio pode parecer
    </div>
  );
}
