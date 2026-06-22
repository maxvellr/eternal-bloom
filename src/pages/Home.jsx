import Hero from '../components/sections/Hero';
import { Link } from 'react-router-dom';
import { artistsData } from '../data/ArtistData';

function Home() {
  const artists = Object.values(artistsData);
  return( <><Hero />
  {/* About Studio Section */}
      {/* <section className="border-b border-zinc-800/80 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Why Eternal Bloom
            </p>
            <h2 className="text-3xl font-semibold text-zinc-50 font-[ebGaramond] sm:text-4xl">
              A private studio designed for your comfort
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black/50 p-8 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">Health-First Approach</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Single-use needles, sterile equipment, and rigorous safety protocols for every session.
              </p>
            </div>

          
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black/50 p-8 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-zinc-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-zinc-500/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-zinc-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">Private Sessions</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Appointment-only access ensures your session is calm, private, and uninterrupted.
              </p>
            </div>

            
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black/50 p-8 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-zinc-500/10 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-zinc-500/20 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-zinc-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">Expert Aftercare</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Detailed digital aftercare instructions to ensure your tattoo heals beautifully.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Meet Our Artists Section */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="text-center mb-12">
          {/* <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Our Artists
          </p> */}
          <h2 className="text-3xl font-semibold text-zinc-50 font-[ebGaramond] sm:text-4xl mb-4">
            Our Artists
          </h2>
          <p className="text-zinc-400 text-sm max-w-6xl mx-auto">
            Each artist brings their own style and expertise. Browse their work and find the perfect match for your vision.
          </p>
        </div>

        {/* Artists Grid with Diagonal Images */}
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <Link 
              key={artist.id}
              to={`/eternal-bloom/artists/${artist.id}`}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black transition-all hover:border-zinc-700"
            >
              {/* Diagonal Split Images */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                {/* Bottom - Portfolio */}
                <div className="absolute inset-0">
                  <img 
                    src={artist.image} 
                    alt={`${artist.name} work`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Top - Headshot with diagonal clip */}
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 50%)'
                  }}
                >
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-50 font-[ebGaramond] mb-1">
                  {artist.name}
                </h3>
                <p className="text-sm text-zinc-400 mb-3">{artist.specialty}</p>
                
                <div className="flex flex-wrap gap-2">
                  {artist.styles.slice(0, 2).map(style => (
                    <span 
                      key={style}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-xs text-zinc-500">
                  {artist.availability}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
  
</>) 
};

export default Home;