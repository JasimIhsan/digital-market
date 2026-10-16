/* Decorative animated gradient blobs and grid behind the hero. */
export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)] bg-[size:72px_72px]" />
      <div className="absolute -top-40 left-1/4 size-[36rem] animate-drift rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 size-[28rem] animate-drift rounded-full bg-software/25 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/2 size-[24rem] animate-drift rounded-full bg-accent/15 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}
