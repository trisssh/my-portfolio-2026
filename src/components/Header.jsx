import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "About", href: "#" },
    // { name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* <nav className="mx-auto flex items-center justify-between bg-transparent px-5 md:px-20 py-3 backdrop-blur-xl shadow-lg"> */}
        <nav className="mx-auto flex items-center justify-between bg-white/10 px-5 md:px-20 py-3 backdrop-blur-xl shadow-lg">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-white md:text-black">
            Trisssh.
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative pb-1 text-sm font-medium text-black transition-colors duration-300 hover:text-red-700
             after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
             after:bg-red-700 after:transition-all after:duration-300
             hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-800">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto max-w-7xl overflow-hidden border border-white/30 bg-white/15 backdrop-blur-xl shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-100 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="space-y-4 p-5 text-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-gray-900 transition hover:bg-purple-200 p-3 rounded-xl"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-5 pt-0">
          <button className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-purple-800">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}
