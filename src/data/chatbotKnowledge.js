import { personalInfo, experienceData, aiProjectsData, dataProjectsData, skillGroups, educationData, certificationsData } from './portfolioData';

export const knowledgeBase = {
  personal: personalInfo,
  experience: experienceData,
  aiProjects: aiProjectsData,
  dataProjects: dataProjectsData,
  skills: skillGroups,
  education: educationData,
  certifications: certificationsData,
  availability: {
    status: "Immediate Joiner",
    noticePeriod: "None (Immediate)",
    lookingFor: "AI Engineer, Generative AI Engineer, Agentic AI Developer, AI/ML Engineer roles"
  }
};

export function queryChatbot(userMessage, conversationHistory = []) {
  const q = userMessage.trim().toLowerCase();
  
  // Get last context from history if follow-up
  const lastBotMsg = conversationHistory.length > 0 
    ? [...conversationHistory].reverse().find(m => m.sender === 'bot')?.text || '' 
    : '';

  // 1. Follow-up handling
  if (lastBotMsg.includes("Agentic Author") || (q.includes("it") && (q.includes("model") || q.includes("observability") || q.includes("backend") || q.includes("translator")))) {
    if (q.includes("model") || q.includes("llm")) {
      return "Agentic Author uses **Groq's Llama 3.3 70B** model for rapid content generation and translation.";
    }
    if (q.includes("observability") || q.includes("tracing") || q.includes("monitor")) {
      return "LangSmith was used for observability, tracing, and prompt evaluations in Agentic Author.";
    }
    if (q.includes("backend") || q.includes("api")) {
      return "Agentic Author uses a decoupled **FastAPI** backend with REST endpoints and a **Streamlit** frontend.";
    }
    if (q.includes("state") || q.includes("pydantic")) {
      return "Agentic Author uses **Pydantic** for structured state management and reliable outputs across workflow nodes.";
    }
  }

  if (lastBotMsg.includes("NeoAgri") || (q.includes("it") && (q.includes("crop") || q.includes("disease") || q.includes("voice") || q.includes("cnn")))) {
    if (q.includes("cnn") || q.includes("disease") || q.includes("vision") || q.includes("model")) {
      return "NeoAgri features a CNN-based crop disease detection model deployed using **ONNX** and **TensorFlow Lite**.";
    }
    if (q.includes("voice") || q.includes("speech")) {
      return "NeoAgri uses Speech-to-Text and LLM-based intent recognition to translate natural language voice commands into backend action calls.";
    }
    if (q.includes("frontend") || q.includes("mobile")) {
      return "NeoAgri's mobile interface is built with **React Native / JavaScript**, connected to Python backend APIs and PostgreSQL.";
    }
  }

  // 2. Direct Persona & Identity Questions
  if (q.includes("who is jishan") || q.includes("who are you") || q.includes("tell me about jishan") || q.includes("summary") || q.includes("about jishan") || q.includes("profile")) {
    return `**Jishan Attar** is an **AI Engineer** with 2+ years of combined professional and hands-on experience in Agentic AI, Generative AI, Machine Learning, Data Analytics, Python, and SQL.\n\n` +
      `He specializes in building multi-agent systems, RAG pipelines, AI applications, backend APIs (FastAPI), and data-driven solutions using LangChain, LangGraph, PySpark, Docker, Azure, and AWS.\n\n` +
      `Current Status: **${personalInfo.status}**.`;
  }

  // 3. Availability / Contact
  if (q.includes("available") || q.includes("immediate") || q.includes("joiner") || q.includes("notice")) {
    return `Yes! Jishan is an **Immediate Joiner** and available immediately for full-time opportunities in AI Engineering, Generative AI, and Agentic AI roles.`;
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire")) {
    return `You can reach Jishan Attar through:\n` +
      `- 📧 **Email:** [${personalInfo.email}](mailto:${personalInfo.email})\n` +
      `- 📞 **Phone:** ${personalInfo.phone}\n` +
      `- 💼 **LinkedIn:** [linkedin.com/in/jishanattar](https://www.linkedin.com/in/jishanattar/)\n` +
      `- 💻 **GitHub:** [github.com/belikejishu](https://github.com/belikejishu)\n` +
      `- 🌐 **Portfolio:** [portfolio-zeta-navy-83.vercel.app](https://portfolio-zeta-navy-83.vercel.app/)`;
  }

  if (q.includes("github") || q.includes("repo")) {
    return `Jishan's GitHub profile is available at: [github.com/belikejishu](https://github.com/belikejishu). You can view repositories for Agentic Author, NeoAgri, LangChain Multi-Agent Research System, and more!`;
  }

  if (q.includes("linkedin")) {
    return `Jishan's LinkedIn profile: [linkedin.com/in/jishanattar](https://www.linkedin.com/in/jishanattar/).`;
  }

  // 4. Experience & Work History
  if (q.includes("years of experience") || q.includes("how much experience") || q.includes("experience level")) {
    return `Jishan has **2+ years of combined professional and hands-on experience** in Agentic AI, Generative AI, Machine Learning, Data Analytics, Python, and SQL.`;
  }

  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("company") || q.includes("atos") || q.includes("iocl") || q.includes("impact") || q.includes("e-stone") || q.includes("wpp")) {
    if (q.includes("iocl") || q.includes("impact") || q.includes("acc")) {
      return `**Impact Infotech Private Limited (Client: ATOS / IOCL)**\n` +
        `*Role:* Analyst – ACC Executive (Automation Control Center)\n` +
        `*Duration:* August 2025 – May 2026\n\n` +
        `*Key Highlights:*\n` +
        `• Developed AI/ML & Generative AI solutions using Python, LangChain, LangGraph, LLMs, RAG, and FAISS for enterprise information retrieval & SLA tracking.\n` +
        `• Built Agentic AI workflows with tool calling and conditional orchestration.\n` +
        `• Automated data analysis, ETL, and SLA reporting using Python, Pandas, SQL, and Apache Superset.\n` +
        `• Contributed to Computer Vision and Deep Learning solutions for audit image verification.`;
    }
    if (q.includes("e-stone") || q.includes("wpp") || q.includes("crm") || q.includes("adept")) {
      return `**E-Stone Information Technology Private Limited (Client: ATOS / WPP)**\n` +
        `*Role:* Consultant – Trainee Software Engineer\n` +
        `*Duration:* February 2025 – July 2025\n\n` +
        `*Key Highlights:*\n` +
        `• Developed ETL workflows for Adept CRM platform using Centura/Gupta SQL and Azure Databricks (PySpark, Spark SQL).\n` +
        `• Cleansed, transformed, and analyzed high-volume advertising datasets.\n` +
        `• Built interactive campaign performance dashboards and operational reports.`;
    }

    return `Jishan has commercial software & analytics experience at:\n\n` +
      `1. **Impact Infotech Private Limited (Client: ATOS / IOCL)** — Analyst ACC Executive (Aug 2025 – May 2026): AI/ML, Generative AI, LangGraph, RAG, FAISS, Apache Superset.\n` +
      `2. **E-Stone Information Technology Private Limited (Client: ATOS / WPP)** — Consultant Trainee Software Engineer (Feb 2025 – July 2025): Azure Databricks, PySpark, Spark SQL, ETL.`;
  }

  // 5. Projects
  if (q.includes("agentic author") || q.includes("blog generator")) {
    return `**Agentic Author — Blog Generator & Translator**\n\n` +
      `• **Tech Stack:** Python, LangGraph, LangChain, FastAPI, Streamlit, Groq, Llama 3.3 70B, Pydantic, LangSmith.\n` +
      `• **Overview:** A stateful Agentic AI application built using LangGraph and LangChain to automate content generation and multilingual translation.\n` +
      `• **Architecture:** Modular workflow nodes for content planning, title generation, blog generation, and translation using structured state machines.\n` +
      `• **GitHub:** [Agentic Author Repository](https://github.com/belikejishu/Agentic-Author-The-Blog-Generator-Translator)`;
  }

  if (q.includes("neoagri") || q.includes("agritech") || q.includes("voice")) {
    return `**NeoAgri — Multi-Agent Voice-Driven Agritech Ecosystem**\n\n` +
      `• **Tech Stack:** Python, Agentic AI, Voice AI, JavaScript, React Native, PostgreSQL, ONNX, TensorFlow Lite.\n` +
      `• **Overview:** A multi-agent voice-driven AI application for agricultural use cases.\n` +
      `• **Key Features:** Speech-to-Text, LLM intent recognition, prompt engineering, tool calling, and CNN-based crop disease detection using ONNX and TensorFlow Lite.\n` +
      `• **GitHub:** [NeoAgri Repository](https://github.com/belikejishu/NeoAgri)`;
  }

  if (q.includes("research system") || q.includes("multi-agent research") || q.includes("langchain multi-agent")) {
    return `**LangChain Multi-Agent Research System**\n\n` +
      `• **Tech Stack:** Python, LangChain, LangGraph, OpenAI GPT-4o-mini, BeautifulSoup, Tavily API, Streamlit.\n` +
      `• **Overview:** An autonomous multi-agent research system coordinating specialized web search and reader agent workflows.\n` +
      `• **Key Features:** Multi-source web retrieval with Tavily/BeautifulSoup, data extraction, report synthesis, and Critic Chain QA evaluation.\n` +
      `• **GitHub:** [Multi-Agent Research System Repo](https://github.com/belikejishu/LangChain-Multi-Agent-Research-System)`;
  }

  if (q.includes("student success") || q.includes("cloud counselage")) {
    return `**Data-Driven Insights on Student Success Factors Analysis**\n\n` +
      `• **Role:** Data Analyst Intern at Cloud Counselage Pvt. Ltd.\n` +
      `• **Overview:** Analyzed ~4,900 student records using Python and Power BI to evaluate CGPA, salary expectations, leadership, and event participation factors.\n` +
      `• **GitHub:** [Student Success Repo](https://github.com/belikejishu/Data-Driven-Insights-on-Student-Success-Factors-Analysis)\n` +
      `• **Certificate:** [Verify Certificate](https://cloudcounselage.graphy.com/verify-certificate?serialno=IP/EL/DAY/000107)`;
  }

  if (q.includes("attrition") || q.includes("workforce") || q.includes("databricks project")) {
    return `**Workforce Analysis and Attrition Prediction Using Azure Databricks**\n\n` +
      `• **Tech Stack:** Azure Databricks, Spark SQL, PySpark, Big Data Analytics.\n` +
      `• **Overview:** Investigated employee turnover drivers across departments, education, and age groups to generate HR retention strategies.\n` +
      `• **GitHub:** [Workforce Attrition Repo](https://github.com/belikejishu/Workforce-Analysis-and-Attrition-Prediction-Using-Azure-Databricks)`;
  }

  if (q.includes("projects") || q.includes("portfolio projects")) {
    return `Jishan has developed key AI and Data engineering projects:\n\n` +
      `🤖 **AI & Agentic Projects:**\n` +
      `1. **Agentic Author**: LangGraph & LangChain blog generator & translator (FastAPI + Groq Llama 3.3 70B).\n` +
      `2. **NeoAgri**: Voice-driven Agritech multi-agent app (React Native + CNN ONNX/TFLite).\n` +
      `3. **LangChain Multi-Agent Research System**: Web research agents (Tavily + GPT-4o-mini + Critic chain).\n\n` +
      `📊 **Data & Analytics Projects:**\n` +
      `4. **Student Success Factors Analysis**: Python & Power BI analysis of ~4,900 students.\n` +
      `5. **Workforce Attrition Prediction**: Azure Databricks & Spark SQL predictive analytics.`;
  }

  // 6. Skills & Tech Stack Queries
  if (q.includes("langgraph") || q.includes("langchain") || q.includes("agentic ai")) {
    return `Yes! Jishan is highly skilled in **Agentic AI**, using **LangGraph** and **LangChain** to build stateful agent workflows, multi-agent orchestration, tool calling, function calling, and prompt engineering. He also holds a certification in *Agentic AI With LangGraph and LangChain*.`;
  }

  if (q.includes("rag") || q.includes("vector") || q.includes("faiss") || q.includes("chromadb") || q.includes("pinecone")) {
    return `Yes! Jishan has practical experience building **RAG (Retrieval-Augmented Generation)** pipelines using FAISS, ChromaDB, Pinecone, vector search, semantic search, hybrid search, and context-aware generation.`;
  }

  if (q.includes("python") || q.includes("fastapi") || q.includes("flask") || q.includes("backend")) {
    return `Python is Jishan's primary programming language! He uses Python for Agentic AI, ML, Data Analytics (Pandas, PySpark), and backend API development with **FastAPI**, **Flask**, and **Pydantic**.`;
  }

  if (q.includes("azure") || q.includes("databricks") || q.includes("aws") || q.includes("docker") || q.includes("cloud")) {
    return `Jishan has cloud & DevOps experience with:\n` +
      `- **Azure / Databricks:** PySpark, Spark SQL, data processing clusters.\n` +
      `- **AWS:** S3, EC2 (Certified AWS Academy Cloud Foundation).\n` +
      `- **DevOps & Observability:** Docker, Git/GitHub/GitLab, CI/CD, and LangSmith.`;
  }

  if (q.includes("machine learning") || q.includes("computer vision") || q.includes("deep learning") || q.includes("onnx")) {
    return `Jishan's Machine Learning expertise includes TensorFlow, Keras, CNNs, Computer Vision (OpenCV), model deployment with ONNX and TensorFlow Lite, and predictive analytics.`;
  }

  if (q.includes("skills") || q.includes("tech stack") || q.includes("technologies")) {
    return `Jishan's technical stack spans:\n\n` +
      `• **Agentic & Gen AI:** LangGraph, LangChain, Multi-Agent Systems, Tool Calling, Prompt Engineering, RAG (FAISS, ChromaDB).\n` +
      `• **LLMs & APIs:** OpenAI GPT-4o, Gemini, Groq, Llama, Claude, Hugging Face, Tavily API.\n` +
      `• **Programming & Data:** Python, SQL, Pandas, NumPy, PySpark, ETL, EDA.\n` +
      `• **Backend & Web:** FastAPI, Flask, REST APIs, Pydantic, Streamlit, React Native, JavaScript.\n` +
      `• **ML & Vision:** TensorFlow, Keras, CNN, Computer Vision, ONNX, TFLite.\n` +
      `• **Cloud & BI:** Azure Databricks, AWS (S3, EC2), Docker, Power BI, Apache Superset, LangSmith.`;
  }

  // 7. Education & Certifications
  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("university")) {
    return `**Education:**\n` +
      `🎓 **Bachelor of Engineering in Information Technology**\n` +
      `M.H. Saboo Siddik College of Engineering, Mumbai (Aug 2019 – May 2023) | **CGPI: 8.43**\n\n` +
      `🏫 **12th HSC (Science):** Mahatma Gandhi Vidyalay (2019) — **76.77%**\n` +
      `🏫 **10th SSC:** Mahatma Gandhi Vidyalay (2017) — **90.80%**`;
  }

  if (q.includes("certification") || q.includes("certificate") || q.includes("courses")) {
    return `Jishan holds the following certifications:\n\n` +
      `1. **Agentic AI With LangGraph and LangChain** — Udemy\n` +
      `2. **Advanced Diploma in Data Analytics** — Squad Infotech Pvt. Ltd., Thane ([View Certificate](https://drive.google.com/file/d/1hKCvDrD-tZMp0zngRrv3khHzV6fZRic-/view?usp=drive_link))\n` +
      `3. **AWS Academy Cloud Foundation** — AWS ([View Badge](https://www.credly.com/badges/f2e1e491-f158-4148-86a2-d966260a5cf4/print))\n` +
      `4. **MySQL** — Great Learning ([View Certificate](https://www.mygreatlearning.com/certificate/OROFRKXB))\n` +
      `5. **Python** — Kaggle ([View Certificate](https://www.kaggle.com/learn/certification/jishanattar01/python))`;
  }

  // Fallback - Strictly adhere to non-hallucination rule
  return "I don't have that specific information in Jishan's portfolio. You can contact Jishan directly via email at [jishanattar45@gmail.com](mailto:jishanattar45@gmail.com) or phone at 9112180984!";
}
