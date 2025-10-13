"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function GalleryGrid({ images, getAlt, showCaptions = false }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const alt = (src, i) => (getAlt ? getAlt(src, i) : `Réalisation ${i + 1}`);

  const close = useCallback(() => setOpen(false), []);
  const openAt = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIndex((n) => (n + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((n) => (n - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length, close]);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => openAt(i)}
            className="group rounded-2xl overflow-hidden ring-1 ring-brand/30 bg-white shadow hover:shadow-lg transition text-left flex flex-col h-full"
            aria-label={`Agrandir: ${alt(src, i)}`}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={src}
                alt={alt(src, i)}
                fill
                className="object-cover group-hover:scale-[1.03] transition"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="empty"
                priority={i < 2}
              />
              <img
                src="/logo-talbat.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-2 bottom-2 h-6 w-auto opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                draggable={false}
              />
            </div>

            {showCaptions && (
              <div className="p-3 text-sm text-brand-dark/90 min-h-[48px] flex items-center">
                <span className="block overflow-hidden text-ellipsis">
                  {alt(src, i)}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) =>
              (e.currentTarget.dataset.x = e.touches[0].clientX)
            }
            onTouchEnd={(e) => {
              const start = Number(e.currentTarget.dataset.x || 0);
              const end = e.changedTouches[0].clientX;
              const delta = end - start;
              if (Math.abs(delta) > 40) {
                setIndex((n) =>
                  delta < 0
                    ? (n + 1) % images.length
                    : (n - 1 + images.length) % images.length
                );
              }
            }}
          >
            <img
              src={images[index]}
              alt={alt(images[index], index)}
              className="block max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-lg"
              draggable={false}
            />

            <img
              src="/logo-talbat.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-3 bottom-3 h-8 w-auto opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
              draggable={false}
            />

            <button
              onClick={close}
              className="absolute top-2 right-2 px-3 py-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80"
              aria-label="Fermer"
            >
              Fermer ✕
            </button>
            <button
              onClick={() =>
                setIndex((n) => (n - 1 + images.length) % images.length)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
              aria-label="Précédent"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((n) => (n + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80"
              aria-label="Suivant"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
              {index + 1} / {images.length} — {alt(images[index], index)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
