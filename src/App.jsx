import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TelegramWidget from './components/TelegramWidget';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="app-main">
      <Navbar currentTheme={currentTheme} setTheme={setCurrentTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Terminal />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <TelegramWidget />
    </div>
  );
}
