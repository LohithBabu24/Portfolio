import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div
        className="flex justify-between items-center py-3 px-6 md:px-12
                   backdrop-blur-md border-b border-white/20
                   bg-[length:300%_300%] animate-gradientMove
                   bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600
                   dark:from-slate-900 dark:via-indigo-900 dark:to-purple-950
                   shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
        style={{ fontFamily: '"Calibri", "Segoe UI", sans-serif' }}
      >
        {/* LEFT — Profile & Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/70 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute inset-0 rounded-full blur-md bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
              Lohith Babu C
            </h1>
            <span className="text-xs md:text-sm text-white/80 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Aspiring Software Developer
            </span>
          </div>
        </a>

        {/* RIGHT — Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-white font-semibold rounded-xl overflow-hidden
                           bg-white/10 backdrop-blur-sm
                           hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-blue-500/30
                           hover:text-white hover:font-bold
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                           transform hover:-translate-y-1 active:scale-95
                           transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Lohith Babu C (CV).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 font-semibold text-white rounded-xl
                         bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600
                         hover:from-teal-400 hover:to-green-500
                         shadow-[0_0_20px_rgba(34,197,94,0.7)]
                         transform hover:-translate-y-1 active:scale-95
                         transition-all duration-300 hover:font-bold"
            >
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md
                         shadow-[0_0_10px_rgba(255,255,255,0.3)] transform hover:rotate-12 hover:scale-110
                         transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-300" />
              ) : (
                <Moon className="w-6 h-6 text-blue-100" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shadow-lg w-full">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100
                             hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-blue-500/30
                             hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Lohith Babu C (CV).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100
                           bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600
                           hover:from-teal-400 hover:to-green-500
                           text-white transition"
              >
                Resume
              </a>
            </li>
            <li className="flex justify-center mt-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
              >
                {theme === "dark" ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-blue-100" />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
