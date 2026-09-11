import React from 'react';
import { Database, Cpu, BarChart3, Code2, Bot, Layers, Server, Cloud, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const SkillsMatrix = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming & Analytics': return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Agentic AI & Generative AI': return <Bot className="w-5 h-5 text-blue-600" />;
      case 'LLMs & AI APIs': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'RAG & Knowledge Retrieval': return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Machine Learning & AI': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Backend & APIs': return <Server className="w-5 h-5 text-blue-600" />;
      case 'Data Visualization': return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5 text-blue-600" />;
      default: return <Database className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Skills & Technical Capabilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Categorized skills across Agentic AI, Generative AI, LLMs, RAG, ML, Backend development, Data analytics, and Cloud infrastructure.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 text-left"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3 sm:pb-3.5">
                <div className="p-2 sm:p-2.5 rounded-xl bg-blue-100/70 border border-blue-200">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {group.category}
                </h3>
              </div>

              {/* Individual Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-300 shadow-2xs hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsMatrix;
