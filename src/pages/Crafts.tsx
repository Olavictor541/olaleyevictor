import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, asset, profile } from "../data";

export default function Crafts() {
  usePageTitle("Crafts");
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + artworks.length) % artworks.length)),
    []
  );

  // Keyboard controls + scroll lock for the lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : artworks[open];

  return (
    <div className="pt-32 md:pt-40 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeading eyebrow="Collage · Graphite · Mixed media">CRAFTS</SectionHeading>
          <p className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg">
            Visual artworks that reflect my passion for creativity and storytelling: explorations of the mind, faith,
            identity and the world we live in. Tap any piece to view it full size.
          </p>
        </Reveal>

        {/* Masonry gallery: portrait works keep their natural proportions */}
        <div className="mt-12 md:mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6">
          {artworks.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 100} className="mb-5 md:mb-6 break-inside-avoid">
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left"
                aria-label={`View “${a.title}” full size`}
              >
                <img
                  src={asset(a.image)}
                  alt={a.title}
                  width={a.width}
                  height={a.height}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-5 md:p-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold leading-snug">{a.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">{a.medium}</p>
                    </div>
                    <Maximize2 className="w-5 h-5 flex-shrink-0 text-orange-200" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Interested in a piece or a commission?{" "}
          <a href={`mailto:${profile.email}?subject=Artwork%20enquiry`} className="text-orange-200 hover:underline">
            Get in touch
          </a>
          .
        </p>
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {current && (
        <div
          className="fixed inset-0 z-[60] bg-black flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 md:px-8 h-16 text-sm text-gray-400">
            <span>
              {open! + 1} / {artworks.length}
            </span>
            <button onClick={close} className="p-2 -mr-2 text-white hover:text-orange-200" aria-label="Close" autoFocus>
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-20">
            <img
              key={current.id}
              src={asset(current.image)}
              alt={current.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 grid place-items-center rounded-full bg-white/10 hover:bg-orange-200 hover:text-black text-white transition-colors"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 grid place-items-center rounded-full bg-white/10 hover:bg-orange-200 hover:text-black text-white transition-colors"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="px-4 py-5 md:py-6 text-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg md:text-2xl font-bold text-white">{current.title}</h2>
            <p className="text-sm text-gray-400 mt-1">
              {current.medium} · {profile.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
