import React from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-blue-200 via-cyan-200 to-indigo-200 blur-3xl rounded-full pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-7 relative z-10">

        {/* User Profile Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
            />
          </div>
        </div>

        {/* Name & Role Title */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {personalInfo.name}
          </h1>

          <div className="text-xl sm:text-3xl font-extrabold text-blue-600 tracking-wide">
            {personalInfo.title}
          </div>
        </div>

        {/* Core Hero Summary */}
        <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed text-center px-2">
          {personalInfo.summary}
        </p>

        {/* Hero Technology Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto pt-1">
          {personalInfo.heroTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-800 border border-slate-300 shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:pt-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-blue-500 text-slate-800 font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5"
          >
            <span>About Me</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all shadow-2xs"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all shadow-2xs"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
