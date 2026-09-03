export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-9">
      <div className="container flex flex-wrap items-center justify-between gap-4 text-[13px] text-muted-foreground/80">
        <span>Henrry Cell · Piedade &amp; Cajueiro Seco — Jaboatão dos Guararapes, PE</span>
        <span className="font-mono text-xs">
          Protótipo por{" "}
          <a
            href="https://github.com/devaqn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-deep underline underline-offset-2"
          >
            devaqn
          </a>{" "}
          — não reflete o site oficial da marca
        </span>
      </div>
    </footer>
  );
}
