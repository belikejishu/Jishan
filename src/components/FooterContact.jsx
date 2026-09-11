import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Globe, ArrowUp, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FooterContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-14 sm:py-20 bg-slate-900 text-slate-300 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Dark Contact Card Container */}
        <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl text-center space-y-6 sm:space-y-8">

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let’s Connect
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
              Open for full-time AI Engineering, Agentic AI, Generative AI, and AI/ML opportunities. Immediate joiner.
            </p>
          </div>

          {/* Action CTAs: Email, Phone, LinkedIn, GitHub, Portfolio */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 text-cyan-300" />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>+91 {personalInfo.phone}</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm transition-all border border-slate-700 hover:-translate-y-0.5 shadow-md"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm transition-all border border-slate-700 hover:-translate-y-0.5 shadow-md"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 font-bold text-sm transition-all hover:-translate-y-0.5 shadow-md"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5 text-cyan-400" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

          </div>

        </div>

        {/* Back to top Link */}
        <div className="pt-8 sm:pt-12 flex items-center justify-between text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors py-2 px-3 rounded-xl hover:bg-slate-800/50"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterContact;
