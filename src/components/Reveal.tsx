import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/** Large page/section heading in the site's signature condensed type. */
export function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-orange-300/80 mb-3">{eyebrow}</p>
      )}
      <h2 className="font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-[0.9] text-orange-200">
        {children}
      </h2>
    </div>
  );
}
