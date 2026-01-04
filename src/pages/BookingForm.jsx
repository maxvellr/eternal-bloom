import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function BookingRequest() {
  const [searchParams] = useSearchParams();
  const artistFromUrl = searchParams.get("artist");

  const [artist, setArtist] = useState("");

  useEffect(() => {
    if (artistFromUrl) {
      setArtist(artistFromUrl);
    }
  }, [artistFromUrl]);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full max-w-6xl px-48 py-24">
          <h1 className="text-3xl font-semibold font-[ebGaramond] mb-4">
            Request a Tattoo Appointment
          </h1>

          <p className="text-sm text-zinc-400 mb-10">
            Eternal Bloom is a private, appointment-only studio. Please complete
            the form below and we’ll follow up via email.
          </p>

          <form className="space-y-6">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            />

            <textarea
              name="description"
              required
              placeholder="Describe your tattoo idea"
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 h-32"
            />

            <select
              name="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3"
            >
              <option value="">No preference</option>
              <option value="Spiritfox">Spiritfox</option>
              <option value="Rainy">Rainy</option>
              <option value="Niemo">Niemo</option>
            </select>

            <button className="block header-button w-full text-center rounded-full bg-zinc-500 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors hover:bg-zinc-200">
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
