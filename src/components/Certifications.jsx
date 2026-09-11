import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Professional Verification
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Certifications & Training
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Industry recognized credentials in Agentic AI, Cloud, Data Analytics, Databases, and Python.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group text-left"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-bold text-blue-600">
                  {cert.issuer}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.desc}
                </p>
              </div>

              {cert.link && (
                <div className="pt-4 mt-4 border-t border-slate-200/80">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
