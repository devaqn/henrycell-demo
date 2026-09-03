import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.12em] text-brand-deep">
      <span className="h-[7px] w-[7px] rounded-full bg-brand shadow-[0_0_0_3px_hsl(var(--brand-tint))]" />
      {children}
    </div>
  );
}
