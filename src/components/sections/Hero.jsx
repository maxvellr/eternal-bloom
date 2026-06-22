import Button from '../ui/Button';
import { Link } from "react-router-dom";
import { artistsData } from '../../data/ArtistData';

function Hero() {
  
  const artists = Object.values(artistsData);
  
  return (
    <>
      {/* Full-width Hero with Background */}
      <section className="relative border-b border-zinc-800/80 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/site/lounge.jpg" 
            alt="Eternal Bloom Studio"
            className="h-full w-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/40 to-black" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-[ebGaramond] text-zinc-400">
            Private Tattoo Studio · Vancouver, WA
          </p>          
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
            Darkwork, Gothic & Neo-Traditional tattoos{' '}
            <span className='font-[ebGaramond] italic text-zinc-300'>by artists who care.</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-300">
            Eternal Bloom is a private studio focused on custom, clean work and a calm,
            inclusive experience from first consult to final session.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link variant="primary" to="/booking" className="rounded-full bg-zinc-50 px-6 text-sm font-medium header-button transition-colors hover:bg-zinc-200">
            Book Consultation
          </Link>
            <Link to="/artists">
              <Button variant="secondary">
                View Artists
              </Button>
            </Link>
          </div>

          {/* Quick Info */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="font-medium text-zinc-300">Styles</p>
              <p className="text-zinc-400">Black & Gray · Neo-Traditional</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-zinc-300">Booking</p>
              <p className="text-zinc-400">Accepting new clients</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-zinc-300">Location</p>
              <p className="text-zinc-400">Vancouver, WA</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Hero;