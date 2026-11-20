import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PageIntro } from "../components/Section";
import { usePageTitle } from "../components/usePageTitle";
import { artworks, asset, profile } from "../data";

export default function Art() {
  usePageTitle("Art");
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + artworks.length) % artworks.length)),
    []
  );

  // Keyboard controls and scroll lock while the viewer is open
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
    <>
      <PageIntro title="Art">
        <p>
          Collage and graphite drawings. Most of them are about the mind, faith and identity. Tap a piece to see it
          larger.
        </p>
      </PageIntro>

      <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5">
        {artworks.map((a, i) => (
          <li key={a.id}>
            <button onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`View ${a.title}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-white">
                <img
                  src={asset(a.image)}
                  alt={a.title}
                  width={a.width}
                  height={a.height}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <p className="mt-3 text-[15px] font-medium leading-snug">{a.title}</p>
              <p className="text-sm muted">{a.medium}</p>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-14 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">
        Interested in a piece or a commission?{" "}
        <a href={`mailto:${profile.email}?subject=Artwork`} className="link">
          Email me
        </a>
        .
      </p>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col bg-stone-50 dark:bg-[#0c0c0b]"
        >
          <div className="flex items-center justify-between px-5 h-14 text-sm muted">
            <span className="tabular-nums">
              {open! + 1} / {artworks.length}
            </span>
            <button onClick={close} aria-label="Close" autoFocus className="p-2 -mr-2 hover:text-stone-900 dark:hover:text-stone-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-5 sm:px-16">
            <img
              key={current.id}
              src={asset(current.image)}
              alt={current.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-sm"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-5" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => step(-1)}
              aria-label="Previous"
              className="w-10 h-10 grid place-items-center rounded-full border rule muted hover:text-stone-900 dark:hover:text-stone-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-center min-w-0">
              <p className="font-medium truncate">{current.title}</p>
              <p className="text-sm muted">{current.medium}</p>
            </div>
            <button
              onClick={() => step(1)}
              aria-label="Next"
              className="w-10 h-10 grid place-items-center rounded-full border rule muted hover:text-stone-900 dark:hover:text-stone-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
