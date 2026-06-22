import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Artists", path: "/artists" },
    // { name: "Studio", path: "/studio" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" }
  ];

  return (
    <header className="border-b border-zinc-800/80">
      <div className="mx-auto w-full flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 mr-6">
          {/* <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-500">          </div> */}
          <span className="text-sm tracking-[0.15em] uppercase text-zinc-300 font-[ebGaramond] font-bold">
            Eternal Bloom
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-sm text-zinc-400 lg:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-zinc-100 transition-colors header-button"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - HIDDEN ON MOBILE */}
        <div className="hidden lg:block ml-6">
          <Link variant="primary" to="/booking" className="hover:text-zinc-100 transition-colors header-button">
                Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle - ONLY ON MOBILE */}
        <button
          className="lg:hidden text-zinc-400 text-xl p-2 border border-transparent hover:border-zinc-500 transition-colors focus:outline-none focus:border-zinc-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800/80 bg-zinc-950">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-left text-zinc-400 hover:text-zinc-100 header-button transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* CTA in mobile menu */}
            <div className="text-left text-zinc-400 hover:text-zinc-100 header-button transition-colors">
              <Link variant="primary" to="/booking">
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;