import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      {/* Top nav */}
      <header className="border-b border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-500" />
            <span className="text-sm tracking-[0.25em] uppercase text-zinc-400">
              Eternal Bloom
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <button className="hover:text-zinc-100 transition-colors">Artists</button>
            <button className="hover:text-zinc-100 transition-colors">Gallery</button>
            <button className="hover:text-zinc-100 transition-colors">Studio</button>
            <button className="hover:text-zinc-100 transition-colors">FAQ</button>
          </nav>
          <button className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-50 hover:border-zinc-500 hover:bg-zinc-800 transition-colors">
            Book consultation
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Tattoo Studio · Vancouver, WA
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              Darkwork, Gothic & Neo-Traditional tattoos curated for you.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
              Eternal Bloom is a private studio focused on custom, clean work and a calm,
              inclusive experience from first consult to final session.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="rounded-full bg-zinc-50 px-5 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-200 transition-colors">
                Request a Booking
              </button>
              <button className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900 transition-colors">
                View Artists
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-zinc-500">
              <div>
                <p className="font-medium text-zinc-300">Styles</p>
                <p>Illustrative Black & Gray · Neo-Traditional</p>
              </div>
              <div>
                <p className="font-medium text-zinc-300">Booking</p>
                <p>Currently accepting new clients</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex-1 md:mt-0">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#ffffff22,_transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Studio Atmosphere
                  </p>
                  <p className="text-sm text-zinc-300">
                    Soft lighting, curated playlists, and private sessions so you can actually
                    relax in the chair.
                  </p>
                </div>
                <div className="space-y-4 text-xs text-zinc-400">
                  <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4">
                    <span>Single-use needles & sterile setup</span>
                    <span className="rounded-full border border-emerald-500/40 px-2 py-0.5 text-[0.65rem] text-emerald-300">
                      Health-first
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4">
                    <span>Detailed aftercare guidance</span>
                    <span className="text-zinc-500">Digital</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.25em] text-zinc-500">
              Appointment only
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-zinc-500 md:flex-row">
          <span>© {new Date().getFullYear()} Eternal Bloom Studio</span>
          <span>Book via email · Instagram · Booking form</span>
        </div>
      </footer>
    </div>
  );
}

export default App;