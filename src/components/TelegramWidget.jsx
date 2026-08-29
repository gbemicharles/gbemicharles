import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X, CheckCheck, Paperclip } from 'lucide-react';
import './TelegramWidget.css';

export default function TelegramWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: "Hello! 👋 I'm Gbemicharles' AI assistant. Ask me anything about my Web3, AI, or bot engineering services!",
      time: '10:00'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const suggestions = [
    { text: "💼 Availability / Hire", category: "hire" },
    { text: "🛠️ AI & Web3 Stack", category: "stack" },
    { text: "📈 Featured Projects", category: "projects" },
    { text: "⚡ Tell me about Gramfinity", category: "gramfinity" }
  ];

  const responses = {
    hire: "Yes! I am actively available for high-impact contracts and freelance builds! I specialize in website design, Telegram Mini-Apps, custom automation bots, and AI pipelines. You can hire me by sending an email to lordgbemicharles@gmail.com, or directly via Telegram @gbemicharles.",
    stack: "For Web3 & TON: I use React, Vite, TypeScript, @tonconnect/ui-react, and Python FastAPI. For Bots & AI: I design around OpenAI APIs, GramJS (for Telegram bot interactions), Stable Diffusion, PostgreSQL, and MongoDB. I pride myself on responsive CSS layouts and fast rendering speeds.",
    projects: "My flagship products include:\n1. Gramfinity (Web3 Trade Terminal & DEX Explorer)\n2. TONIQ (DeFi Mini-App Assistant)\n3. MediaRoom Bot (AI Copywriting, Image & Video OS)\n4. Pedro on TON (Community Hub & balance tracker)\n\nScroll up to the Projects section to try them!",
    gramfinity: "Gramfinity is a comprehensive trade terminal and DEX explorer for the TON blockchain. It includes live candlestick charts, real-time order books, a contract security scanner (analyzing holder risk concentration), and a whale wallet flow tracker. It runs both as a standard web app and a mobile Telegram Mini-App!"
  };

  const getSystemTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadBadge(false);
      // Wait a moment then scroll
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isTyping]);

  const handleSuggestionClick = (suggestion) => {
    // 1. Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: suggestion.text,
      time: getSystemTime()
    };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Trigger Typing animation
    setIsTyping(true);

    // 3. Set timeout for agent reply
    setTimeout(() => {
      setIsTyping(false);
      const agentReply = {
        id: Date.now() + 1,
        sender: 'agent',
        text: responses[suggestion.category] || "I'm not sure about that. Let's get in touch directly via lordgbemicharles@gmail.com!",
        time: getSystemTime()
      };
      setMessages((prev) => [...prev, agentReply]);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userText,
      time: getSystemTime()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Formulate a response based on keywords
    let responseText = "Thanks for reaching out! I'd love to chat more about this. Feel free to shoot me an email at lordgbemicharles@gmail.com or message me on Telegram: t.me/gbemicharles.";
    const query = userText.toLowerCase();

    if (query.includes('hire') || query.includes('available') || query.includes('work') || query.includes('freelance') || query.includes('contract')) {
      responseText = responses.hire;
    } else if (query.includes('stack') || query.includes('languages') || query.includes('use') || query.includes('tech') || query.includes('code')) {
      responseText = responses.stack;
    } else if (query.includes('project') || query.includes('portfolio') || query.includes('build') || query.includes('work')) {
      responseText = responses.projects;
    } else if (query.includes('gramfinity') || query.includes('terminal') || query.includes('dex')) {
      responseText = responses.gramfinity;
    } else if (query.includes('toniq') || query.includes('assistant') || query.includes('defi')) {
      responseText = "TONIQ is a smart Telegram assistant built for the TON blockchain ecosystem. It enables users to explore NFTs, manage their wallets, and execute decentralized finance transactions directly in a chat screen.";
    } else if (query.includes('mediaroom') || query.includes('media') || query.includes('content')) {
      responseText = "MediaRoom Bot is the content creator's operating system. It features AI text drafting, image generation, video integrations, and automated social publishing in a single ecosystem built for teams.";
    } else if (query.includes('pedro') || query.includes('meme')) {
      responseText = "Pedro on TON is an AI agent bot and a Telegram Mini-App designed for tracking balances and interacting with meme holders in a vibrant, community-first format.";
    }

    setTimeout(() => {
      setIsTyping(false);
      const agentReply = {
        id: Date.now() + 1,
        sender: 'agent',
        text: responseText,
        time: getSystemTime()
      };
      setMessages((prev) => [...prev, agentReply]);
    }, 1500);
  };

  const parseMessageText = (text) => {
    if (!text) return '';
    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const parts = line.split(/(\s+)/);
      const lineContent = parts.map((part, partIdx) => {
        const cleanWord = part.trim();
        if (emailRegex.test(cleanWord)) {
          const email = cleanWord.replace(/[.,]$/, "");
          const trailingPunct = cleanWord.substring(email.length);
          return (
            <React.Fragment key={partIdx}>
              <a href={`mailto:${email}`} className="chat-link" target="_blank" rel="noreferrer">
                {email}
              </a>
              {trailingPunct}
            </React.Fragment>
          );
        }
        if (cleanWord.includes('t.me/')) {
          const urlStr = cleanWord.replace(/[.,]$/, "");
          const trailingPunct = cleanWord.substring(urlStr.length);
          const fullUrl = urlStr.startsWith('http') ? urlStr : `https://${urlStr}`;
          return (
            <React.Fragment key={partIdx}>
              <a href={fullUrl} className="chat-link" target="_blank" rel="noreferrer">
                {urlStr}
              </a>
              {trailingPunct}
            </React.Fragment>
          );
        }
        if (cleanWord.startsWith('@')) {
          const usernameWithPunct = cleanWord.substring(1);
          const username = usernameWithPunct.replace(/[.,]$/, "");
          const trailingPunct = usernameWithPunct.substring(username.length);
          const url = username.toLowerCase() === 'gbemicharles_'
            ? `https://x.com/${username}`
            : `https://t.me/${username}`;
          return (
            <React.Fragment key={partIdx}>
              <a href={url} className="chat-link" target="_blank" rel="noreferrer">
                @{username}
              </a>
              {trailingPunct}
            </React.Fragment>
          );
        }
        if (cleanWord.startsWith('**') && cleanWord.endsWith('**')) {
          return <strong key={partIdx}>{cleanWord.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <React.Fragment key={lineIdx}>
          {lineContent}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="telegram-widget-container">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button 
          className="telegram-floating-btn" 
          onClick={() => setIsOpen(true)}
          aria-label="Open Telegram AI Agent Chat"
        >
          <MessageCircle size={28} />
          {unreadBadge && <span className="unread-badge">1</span>}
        </button>
      )}

      {/* Telegram Chat Modal */}
      {isOpen && (
        <div className="telegram-chat-card glass-card">
          {/* Header */}
          <div className="telegram-chat-header">
            <div className="telegram-avatar-container">
              <div className="telegram-avatar">GC</div>
              <span className="online-indicator"></span>
            </div>
            <div className="telegram-header-info">
              <h3>Gbemicharles AI</h3>
              <span className="telegram-status">online agent</span>
            </div>
            <button className="telegram-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="telegram-chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`telegram-bubble-wrapper ${msg.sender}`}>
                <div className="telegram-bubble">
                  <p className="bubble-text">{parseMessageText(msg.text)}</p>
                  <span className="bubble-time">
                    {msg.time}
                    {msg.sender === 'user' && <CheckCheck size={12} className="check-double" />}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="telegram-bubble-wrapper agent">
                <div className="telegram-bubble typing-bubble">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="telegram-suggestions">
            {suggestions.map((sug, idx) => (
              <button 
                key={idx} 
                className="suggestion-chip" 
                onClick={() => handleSuggestionClick(sug)}
                disabled={isTyping}
              >
                {sug.text}
              </button>
            ))}
          </div>

          {/* Footer Input Bar */}
          <form className="telegram-chat-input-bar" onSubmit={handleSendMessage}>
            <button type="button" className="input-action-btn" aria-label="Attach File">
              <Paperclip size={18} />
            </button>
            <input 
              type="text" 
              placeholder="Write a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
            <button 
              type="submit" 
              className="telegram-send-btn" 
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send Message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
