type Variant = "default" | "thin";

export function SectionDivider({ variant = "default" }: { variant?: Variant } = {}) {
  if (variant === "thin") {
    return <div aria-hidden className="h-px w-full bg-accent/30" />;
  }
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="h-[6px] w-full border-b border-t-2 border-foreground/70" />
    </div>
  );
}
