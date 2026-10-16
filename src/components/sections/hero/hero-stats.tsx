import type { Stat } from "@/types";
import { Counter } from "@/components/motion/counter";

interface HeroStatsProps {
  stats: Stat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <dt className="order-2 text-sm text-muted">{stat.label}</dt>
          <dd className="order-1 font-display text-3xl font-semibold tracking-tight">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
