import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, RefreshCw, User, ExternalLink, ChevronDown } from 'lucide-react';
import { queryChatbot } from '../data/chatbotKnowledge';

const suggestedQuestions = [
  "Who is Jishan?",
  "Tell me about his AI experience",
  "What are his main projects?",
  "What is Agentic Author?",
  "What technologies does he use?",
  "Tell me about NeoAgri",
  "How can I contact Jishan?"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Hi! I'm **Jishan AI**, Jishan's Portfolio Assistant.\n\nAsk me anything about Jishan Attar's experience in **Agentic AI**, **Generative AI**, projects, skills, or contact info!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = queryChatbot(text, messages);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation cleared! How else can I assist you with Jishan's portfolio?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Simple Markdown & Link Renderer Helper
  const renderFormattedText = (rawText) => {
    const lines = rawText.split('\n');
    return lines.map((line, lIdx) => {
      // Parse markdown links [text](url) and bold **text**
      const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);

      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, linkText, linkUrl] = match;
            return (
              <a
                key={pIdx}
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-bold underline inline-flex items-center gap-0.5"
              >
                <span>{linkText}</span>
                <ExternalLink className="w-3 h-3 inline" />
              </a>
            );
          }
        } else if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-extrabold text-white">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <React.Fragment key={lIdx}>
          {formattedLine}
          {lIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
            aria-label="Open Jishan AI Chatbot"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
            <span className="font-extrabold text-sm sm:text-base tracking-wide">Ask Jishan AI</span>
          </button>
        )}
      </div>

      {/* Chatbot Window Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] max-w-full h-[580px] max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">

          {/* Header */}
          <div className="p-4 bg-slate-800/90 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md">
                <Bot className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-white text-base leading-tight">Jishan AI</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Assistant
                  </span>
                </div>
                <p className="text-xs text-slate-400">Ask about Jishan's experience & projects</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-xl transition-colors"
                title="Clear Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-xl transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-left scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                  }`}>
                  <div>{renderFormattedText(msg.text)}</div>
                  <div className={`text-[10px] mt-1.5 text-right font-mono ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-500'
                    }`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center text-slate-400">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800 border border-slate-700 p-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Clickable Suggested Questions Carousel/Grid */}
          {messages.length < 5 && (
            <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 mb-1.5 text-left px-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Suggested Questions:</span>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-blue-600/30 text-cyan-300 border border-slate-700 hover:border-cyan-500 transition-all flex-shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-slate-800/90 border-t border-slate-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Jishan AI a question..."
                className="flex-1 bg-slate-900 text-white text-xs sm:text-sm rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white transition-all shadow-md"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};

export default Chatbot;
