import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { instagramUrl } from "@/data/content";

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
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-brand to-brand-deep font-display text-[15px] font-extrabold text-brand-foreground">
            H
          </span>
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
          href={instagramUrl}
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
