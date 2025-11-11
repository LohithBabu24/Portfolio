import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Apply theme dynamically and persist it
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`font-sans transition-colors duration-700 min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Sections — removed extra spacing */}
      <main className="pt-0">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        {/* Contact directly attached to footer */}
        <section id="contact" className="pb-0 mb-0">
          <Contact />
        </section>
      </main>

      {/* Footer sits flush with contact section */}
      <Footer />
    </div>
  );
};

export default App;
