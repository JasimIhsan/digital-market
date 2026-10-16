import { clients } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/motion/marquee";

export function LogoMarquee() {
  return (
    <section aria-label="Clients" className="border-y border-line bg-ink py-10 tone-dark">
      <Container className="flex flex-col gap-6">
        <p className="text-center text-xs font-medium tracking-wider text-muted uppercase">
          Trusted by teams at
        </p>
        <Marquee>
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-xl font-semibold tracking-tight whitespace-nowrap text-muted transition-colors hover:text-fg"
            >
              {client}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
