import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsShowcase from './components/ProjectsShowcase';
import FooterContact from './components/FooterContact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Career Objective */}
        <About />

        {/* 3. Work Experience */}
        <Experience />

        {/* 4. Skills Matrix */}
        <SkillsMatrix />

        {/* 5. Projects Showcase */}
        <ProjectsShowcase />

        {/* 6. Education */}
        <Education />

        {/* 7. Certifications & Credentials */}
        <Certifications />
      </main>
      
      {/* 8. Contact & Footer */}
      <FooterContact />

      {/* 9. Floating Jishan AI Assistant */}
      <Chatbot />
    </div>
  );
}

export default App;
