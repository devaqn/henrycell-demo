import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/data/content";
import henrryCellLogo from "@/assets/henrycell-logo.webp";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#lojas", label: "Lojas" },
  { href: "#instagram", label: "Instagram" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <a href="#topo" className="flex items-center gap-2.5">
          <img
            src={henrryCellLogo}
            alt="Henrry Cell"
            className="h-8 w-8 rounded-[9px] object-cover"
          />
          <span className="font-display text-[17px] font-bold">
            Henrry<span className="text-brand-deep">Cell</span>
          </span>
        </a>

        <div className="hidden gap-7 text-[14.5px] font-medium text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
        >
          Falar agora
        </a>
      </nav>
    </header>
  );
}
