import { cn } from "@/lib/cn";
import { accentClasses } from "@/lib/accent";
import { departments } from "@/data/departments";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { scaleIn } from "@/lib/motion";

const positions = [
  "top-4 left-0",
  "top-1/2 right-0 -translate-y-1/2",
  "bottom-4 left-10",
];

/* Floating department cards that drift at different speeds on scroll. */
export function HeroVisual() {
  return (
    <Reveal variants={scaleIn} delay={0.4} className="relative hidden lg:block">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-line [mask-image:radial-gradient(circle,black_40%,transparent_72%)]"
        />
        {departments.map((department, index) => {
          const accent = accentClasses[department.slug];
          return (
            <Parallax
              key={department.slug}
              offset={30 + index * 25}
              className={cn("absolute w-64", positions[index])}
            >
              <Card padded={false} className={cn("p-5", accent.glow)}>
                <div className="flex items-center gap-3">
                  <IconTile icon={department.icon} accent={department.slug} />
                  <div>
                    <p className="font-display text-sm font-semibold">
                      {department.name}
                    </p>
                    <p className="text-xs text-muted">{department.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1.5">
                  {department.stats.map((stat, barIndex) => (
                    <span
                      key={stat.label}
                      className={cn("h-1.5 flex-1 rounded-full", accent.bg)}
                      style={{ opacity: 1 - barIndex * 0.3 }}
                    />
                  ))}
                </div>
              </Card>
            </Parallax>
          );
        })}
      </div>
    </Reveal>
  );
}
