import ArtistCard from '../components/sections/ArtistCard';
import { Link } from "react-router-dom";
import { artistsData } from "../data/ArtistData";

function Artists() {
  // Convert the object to an array of artists
  const artists = Object.values(artistsData);
  
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Hero Section */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Meet Our Artists
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Expert artists specializing in{' '}
            <span className="font-[Cardo] italic text-zinc-300">
              custom designs
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Each artist at Eternal Bloom brings their unique vision and experience. 
            Browse their specialties and book a consultation to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Not sure which artist is right for you?
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            Book a consultation and we'll help match you with the perfect artist for your vision.
          </p>
          <div className="mt-8">
          <Link variant="primary" to="/booking" className="rounded-full bg-zinc-50 px-6 text-sm font-medium header-button transition-colors hover:bg-zinc-200">
            Book Consultation
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artists;