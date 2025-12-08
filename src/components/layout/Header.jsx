import { useState } from 'react';
import Button from '../ui/Button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Artists', 'Gallery', 'Studio', 'FAQ'];
  
  return (
    <header className="border-b border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-500" />
          <span className="text-sm tracking-[0.25em] uppercase text-zinc-400">
            Eternal Bloom
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
          {navItems.map(item => (
            <button 
              key={item}
              className="hover:text-zinc-100 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* CTA */}
        <Button variant="small">
          Book consultation
        </Button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/80 bg-zinc-950">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navItems.map(item => (
              <button 
                key={item}
                className="text-left text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;