import stars from '../../assets/stars.jpg';
import spiritfox from '../../assets/spiritfox.jpg';
import ArtistCard from '../components/sections/ArtistCard';

const artists = [
  {
    id: 'spiritfox',
    name: "Spiritfox",
    specialty: "Illustrative Darkwork & Gothic",
    bio: "Specializing in intricate darkwork, gothic, and blackwork, she prides herself on bringing her clients' visions to life and she's super hot.",
    image: spiritfox,
    styles: ["Darkwork", "Blackwork", "Gothic"],
    availability: "Booking 2-3 months out",
    instagram: "@spiritfoxtattoo"
  },
  {
    id: 'rainy',
    name: "Rainy",
    specialty: "Blackwork, Neo-Traditional, Black & Gray",
    bio: "Here's some sample bio toext for Rainy. She dressed as a clown in high school and has been tattooing ever since.",
    image: stars,
    styles: ["Neo-Traditional", "Blackwork"],
    availability: "Currently booking",
    instagram: "@rainclowntattoo"
  },
  {
    id: 'virginia',
    name: "Virginia",
    specialty: "Japanese Neo-Traditional, Black & Gray",
    bio: "Virginia's sample bio. Here's some great content about her work and style. We're excited to have her.",
    image: stars,
    styles: ["Japanese Neo-Traditional", "Black & Gray"],
    availability: "Currently Booking",
    instagram: "@niemo_tattoo"
  }
];


function Artists() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Meet Our Artists
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Expert artists specializing in{' '}
            <span className="font-[Cardo] italic text-zinc-300">
              darkwork & custom designs
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Each artist at Eternal Bloom brings their unique vision and experience. 
            Browse their specialties and book a consultation to bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Artists;