import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { artistsData } from "../data/ArtistData";

function ArtistDetails() {
  const { artistId } = useParams();
  const artist = artistsData[artistId];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black text-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Artist not found</h1>
          <Link to="/artists" className="text-zinc-400 hover:text-zinc-200">
            ← Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Artist Header */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left - Artist Photo */}
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800">
              <img
                src={artist.image}
                alt={artist.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right - Artist Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-semibold text-zinc-50 font-[Cardo] mb-2">
                  {artist.name}
                </h1>
                <p className="text-lg text-zinc-400">{artist.specialty}</p>
              </div>

              <p className="text-sm leading-relaxed text-zinc-300">
                {artist.bio}
              </p>

              {/* Styles */}
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t border-zinc-800 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Availability</span>
                  <span className="text-zinc-200">{artist.availability}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Instagram</span>
                  <a
                    href={`https://instagram.com/${artist.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-zinc-50 transition-colors"
                  >
                    {artist.instagram}
                  </a>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Email</span>
                  <a
                    href={`mailto:${artist.email}`}
                    className="text-zinc-200 hover:text-zinc-50 transition-colors"
                  >
                    {artist.email}
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full rounded-full bg-zinc-50 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors hover:bg-zinc-200">
                Book with {artist.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-8 font-[Cardo]">
          Portfolio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artist.portfolio.map((img, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${artist.name} portfolio ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-4xl text-zinc-400 hover:text-zinc-100"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Portfolio detail"
            className="max-h-[90vh] max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ArtistDetails;
