import { stats } from "@/data/content";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface px-6 py-9">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b className="block font-display text-[28px] font-bold tabular-nums">{stat.value}</b>
            <span className="text-[13px] text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
