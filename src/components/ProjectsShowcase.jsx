import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, Bot, BarChart3, ExternalLink } from 'lucide-react';
import { aiProjectsData, dataProjectsData } from '../data/portfolioData';

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects =
    activeTab === 'ai'
      ? aiProjectsData
      : activeTab === 'data'
        ? dataProjectsData
        : [...aiProjectsData, ...dataProjectsData];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Featured Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Agentic AI applications, multi-agent workflows, voice AI ecosystems, and big data analytics pipelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === 'all'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
          >
            All Projects ({aiProjectsData.length + dataProjectsData.length})
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${activeTab === 'ai'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI & Agentic ({aiProjectsData.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${activeTab === 'data'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Data Analytics ({dataProjectsData.length})</span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group text-left"
            >
              <div className="space-y-4 sm:space-y-5">

                {/* Badge & Title + GitHub Icon */}
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="space-y-2">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-600 text-white shadow-2xs">
                        <span>{project.badge}</span>
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    {project.role && (
                      <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md inline-block border border-blue-200">
                        {project.role}
                      </div>
                    )}
                  </div>

                  {/* GitHub Icon Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex-shrink-0 shadow-2xs"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Summary */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Features & Workflow Highlights
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
                    {project.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="flex-1 text-left">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Footer Tech Tags & GitHub Link */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.certificateUrl && (
                    <a
                      href={project.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      <span>Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>View Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default ProjectsShowcase;
