import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Commercial Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Professional Work Experience
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            2+ years of combined commercial and hands-on experience in Agentic AI, Generative AI, RAG pipelines, and data analytics.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 sm:space-y-5"
            >

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 border-b border-slate-100 pb-4 sm:pb-5 text-left">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-blue-600 flex flex-wrap items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-md font-mono border border-blue-200">
                      Client: {exp.client}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {exp.location}
                  </div>
                </div>

                <div className="self-start flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 text-left">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Deliverables & Responsibilities
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="flex-1 text-left">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
