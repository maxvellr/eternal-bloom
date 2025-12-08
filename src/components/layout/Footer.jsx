function Footer() {
  return (
    <footer className="border-t border-zinc-900/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-zinc-500 md:flex-row">
        <span>© {new Date().getFullYear()} Eternal Bloom Studio</span>
        <span>Book via email · Instagram · Booking form</span>
      </div>
    </footer>
  );
}

export default Footer;