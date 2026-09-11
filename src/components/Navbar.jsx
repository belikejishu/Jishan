import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
        : 'py-4 bg-white/80 backdrop-blur-sm border-b border-slate-100'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-blue-600 shadow-2xs group-hover:scale-105 transition-transform"
            />
            <div className="text-left">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight block">
                {personalInfo.name}
              </span>
              <span className="text-[11px] sm:text-xs text-blue-600 font-bold leading-none block">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 last:border-none"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
