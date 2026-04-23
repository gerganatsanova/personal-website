export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center ${className}`}
    >
      <span className="h-px w-10 bg-accent" />
    </div>
  );
}
