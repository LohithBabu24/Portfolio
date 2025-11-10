import React from "react";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 transition-all duration-500">
      {/* Animated Gradient Background */}
      <div
        className="w-full flex justify-between items-center py-3 px-8 md:px-12
                   backdrop-blur-md border-b border-white/20
                   bg-[length:300%_300%]
                   animate-gradientMove
                   bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600
                   dark:from-slate-900 dark:via-indigo-900 dark:to-purple-950
                   shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
        style={{ fontFamily: '"Calibri", "Segoe UI", sans-serif' }}
      >
        {/* LEFT SIDE — Profile + Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white/70 
                         object-cover transform group-hover:scale-110 
                         transition-transform duration-300"
            />
            <span className="absolute inset-0 rounded-full blur-md bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </div>

          {/* Name in Calibri */}
          <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            Lohith Babu C
          </h1>
        </a>

        {/* RIGHT SIDE — Navigation */}
        <ul className="flex gap-4 items-center">
          {[
            { name: "Home", href: "#hero" },
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative px-5 py-2 text-white font-semibold 
                           rounded-xl overflow-hidden
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

          {/* Resume Button */}
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

          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/20 text-white
                         hover:bg-white/30 backdrop-blur-md
                         shadow-[0_0_10px_rgba(255,255,255,0.3)]
                         transform hover:rotate-12 hover:scale-110 
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
      </div>
    </nav>
  );
};

export default Navbar;
