import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

const links = [
  { label: "Home", to: "/" },
  { label: "Cart", to: "/cart" },
  { label: "Shipping", to: "/shipping" },
  { label: "Architecture", to: "/architecture" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, user, logout } = useStore();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950 text-slate-100">
      <nav className="container-width flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3 text-xl font-semibold text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20 text-cyan-300">
            E
          </span>
          Econirva Portal
        </NavLink>

        <button
          type="button"
          className="rounded-lg border border-slate-700 p-2 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-100" />
          <span className="mt-1 block h-0.5 w-5 bg-slate-100" />
        </button>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-cyan-300 ${isActive ? "text-cyan-300" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/cart" className="relative rounded-full border border-slate-700 px-4 py-2 text-xs">
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-semibold text-slate-900">
                {cartCount}
              </span>
            )}
          </NavLink>
          {user ? (
            <button type="button" onClick={onLogout} className="rounded-full border border-slate-700 px-4 py-2 text-xs">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="rounded-full border border-slate-700 px-4 py-2 text-xs">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="container-width flex flex-col gap-3 py-4 text-sm text-slate-300">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            {user ? (
              <button type="button" onClick={onLogout} className="w-fit rounded-full border border-slate-700 px-4 py-2 text-xs">
                Logout
              </button>
            ) : (
              <NavLink to="/login" onClick={() => setIsOpen(false)} className="w-fit rounded-full border border-slate-700 px-4 py-2 text-xs">
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
