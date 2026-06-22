import { useState } from "react";

const studioImages = [
  "/images/studio/1.jpg",
  "/images/studio/2.jpg",
  "/images/studio/3.jpg",
  "/images/studio/4.jpg",
  "/images/studio/5.jpg",
  "/images/studio/6.jpg",
];

export default function Studio() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Header */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-48 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            The Studio
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold font-[ebGaramond] text-zinc-50 mb-6">
            A calm, private space for intentional work
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-400 text-sm leading-relaxed">
            Eternal Bloom is a private, appointment-only studio designed to feel
            quiet, safe, and focused.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studioImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className="group relative aspect-square overflow-hidden transition-colors rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <img
                src={img}
                alt={`Studio view ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:outline-none group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-4xl text-zinc-400 hover:text-zinc-100"
            aria-label="Close gallery"
          >
            ×
          </button>
          <img
            src={activeImage}
            alt="Studio detail"
            className="max-h-[90vh] max-w-full rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
