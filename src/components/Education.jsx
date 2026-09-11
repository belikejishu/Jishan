import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Education
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Formal education in Information Technology and foundational sciences.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3 text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 border-b border-slate-100 pb-3.5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-3 rounded-xl sm:rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-bold text-blue-600 mt-0.5">
                      {edu.institution} <span className="text-slate-500 font-normal text-xs">— {edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="self-start flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="px-3 py-1 bg-blue-50 text-blue-800 font-bold text-xs rounded-lg border border-blue-200 inline-flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>{edu.score}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-normal">
                  {edu.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
