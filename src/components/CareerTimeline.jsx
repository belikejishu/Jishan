import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience, education } from '../data/portfolioData';

const CareerTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            Professional Track Record
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience & Education Timeline
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Career trajectory in data engineering pipeline design, predictive modeling, and analytics leadership.
          </p>
        </div>

        {/* Experience Timeline Stream */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } group`}
            >
              
              {/* Timeline Center Node Icon */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Card Box */}
              <div className="ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h4>
                    <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-16 max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">Education & Certification</span>
            <h5 className="text-base font-bold text-slate-900 dark:text-white">
              {education[0].degree}
            </h5>
            <div className="text-xs text-slate-500 font-medium">
              {education[0].institution} • {education[0].period}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-2">
              {education[0].details}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerTimeline;
