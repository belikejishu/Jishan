import React from 'react';
import { Bot, Cpu, Layers, Database, Sparkles, Server, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Professional Overview
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            About Me & Core Focus
          </h2>
        </div>

        {/* Core Summary Card */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 text-left space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Career Summary
              </h3>
              <p className="text-xs text-cyan-300 font-mono">Agentic AI & Generative AI Engineer</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {personalInfo.aboutDetailed}
          </p>
        </div>

        {/* Core Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {aboutPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all text-left space-y-2"
            >
              <div className="flex items-center gap-2 text-blue-600 font-extrabold text-base">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <h4>{pillar.title}</h4>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
