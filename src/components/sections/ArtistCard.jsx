function ArtistCard({ artist }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black transition-all hover:border-zinc-700 flex flex-col">
      {/* Artist Image */}
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Artist Info - flex-1 pushes button to bottom */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        {/* Name & Specialty */}
        <div>
          <h3 className="text-2xl font-semibold text-zinc-50 font-[Cardo]">
            {artist.name}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">{artist.specialty}</p>
        </div>
        
        {/* Bio - fixed height with line clamp */}
        <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {artist.bio}
        </p>
        
        {/* Styles */}
        <div className="flex flex-wrap gap-2">
          {artist.styles.map(style => (
            <span 
              key={style}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
            >
              {style}
            </span>
          ))}
        </div>
        
        {/* Spacer to push content below to bottom */}
        <div className="flex-1" />
        
        {/* Availability & Instagram */}
        <div className="space-y-2 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
          <div className="flex items-center justify-between">
            <span>Availability</span>
            <span className="text-zinc-300">{artist.availability}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Instagram</span>
            <a 
              href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              {artist.instagram}
            </a>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="w-full rounded-full bg-zinc-50 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 hover:bg-zinc-200">
          Book with {artist.name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
} 
export default ArtistCard;