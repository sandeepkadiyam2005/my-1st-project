import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Materials", href: "#materials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const Navbar = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950 text-slate-100">
      <nav className="container-width flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 text-xl font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
            E
          </span>
          Econirva
        </a>
        <button
          type="button"
          className="flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 transition hover:border-cyan-300 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-100" />
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onCartClick}
            className="relative rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100 transition hover:border-cyan-300"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-semibold text-slate-900">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="container-width flex flex-col gap-4 py-4 text-sm font-medium text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onCartClick();
              }}
              className="w-fit rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-100"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
