import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/components/site-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary shadow-xl" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent flex items-center justify-center">
            <span className="font-display text-accent text-sm font-bold">В</span>
          </div>
          <div>
            <span className="font-display text-white text-lg font-semibold tracking-wide leading-none block">Вертикаль</span>
            <span className="font-body text-white/50 text-[10px] tracking-[0.2em] uppercase leading-none">Группа Компаний</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link font-body text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden lg:inline-flex items-center font-body text-sm bg-accent text-white px-5 py-2 tracking-wide hover:bg-amber-600 transition-colors duration-200"
        >
          Связаться
        </a>

        <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-white/80 hover:text-white px-6 py-3 text-sm border-b border-white/5 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
