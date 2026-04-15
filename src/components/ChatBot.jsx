import React, { useState, useRef, useEffect } from 'react';
import Fuse from 'fuse.js';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { knowledge } from '../data/chatKnowledge';
import botMascot from '../assets/purple_bot.png';
import './ChatBot.css';

// ── Fuse.js setup ─────────────────────────────────────────
const fuse = new Fuse(knowledge, {
  keys: [
    { name: 'q', weight: 0.6 },
    { name: 'tags', weight: 0.4 },
  ],
  threshold: 0.45,
  includeScore: true,
});

const FALLBACK =
  "I'm not sure about that yet. For detailed help, reach us on WhatsApp at +91 9045 860 876 or email contactthepixelcompany@gmail.com — we'll respond quickly!";

const WELCOME =
  "Hi! I'm the Pixel Assistant 👋 Ask me anything about our courses, services, pricing, or how to get started!";

const SUGGESTIONS = [
  'What courses do you offer?',
  'What services do you have?',
  'How do I get started?',
  'How much does Prompt Engineering cost?',
];

function getBotAnswer(input) {
  const results = fuse.search(input.trim());
  if (results.length === 0 || results[0].score > 0.45) return FALLBACK;
  return results[0].item.a;
}

// ── Typing indicator ──────────────────────────────────────
const TypingDots = () => (
  <div className="cb-typing">
    <span /><span /><span />
  </div>
);

// ── Single message bubble ─────────────────────────────────
const Bubble = ({ msg }) => (
  <div className={`cb-bubble-wrap cb-${msg.from}`}>
    <div className="cb-avatar">
      {msg.from === 'bot' ? (
        <img src={botMascot} alt="Bot" className="cb-mascot-img" />
      ) : (
        <User size={14} />
      )}
    </div>
    <div className="cb-bubble">{msg.text}</div>
  </div>
);

// ── Main ChatBot ──────────────────────────────────────────
const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = (text) => {
    const userText = (text || input).trim();
    if (!userText) return;

    setShowSuggestions(false);
    setMessages((prev) => [...prev, { from: 'user', text: userText }]);
    setInput('');
    setTyping(true);

    // Simulate bot "thinking" delay
    setTimeout(() => {
      const answer = getBotAnswer(userText);
      setTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: answer }]);
    }, 700 + Math.random() * 400);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        className={`cb-trigger ${open ? 'cb-trigger-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
      >
        {open ? <X size={22} /> : <img src={botMascot} alt="Chat" className="cb-trigger-mascot" />}
        {!open && <span className="cb-trigger-dot" />}
      </button>

      {/* ── Chat window ── */}
      <div className={`cb-window ${open ? 'cb-window-open' : ''}`} role="dialog" aria-label="Pixel Assistant Chat">
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-left">
            <div className="cb-header-avatar">
              <img src={botMascot} alt="Bot" className="cb-header-mascot" />
            </div>
            <div>
              <p className="cb-header-name">Pixel Assistant</p>
              <p className="cb-header-status">
                <span className="cb-online-dot" />
                Always here to help
              </p>
            </div>
          </div>
          <button className="cb-close" onClick={() => setOpen(false)} aria-label="Close chat">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="cb-messages">
          {messages.map((msg, i) => (
            <Bubble key={i} msg={msg} />
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="cb-bubble-wrap cb-bot">
              <div className="cb-avatar">
                <img src={botMascot} alt="Bot" className="cb-mascot-img" />
              </div>
              <div className="cb-bubble"><TypingDots /></div>
            </div>
          )}

          {/* Suggestion chips (shown only at start) */}
          {showSuggestions && !typing && (
            <div className="cb-suggestions">
              {SUGGESTIONS.map((s, i) => (
                <button key={i} className="cb-chip" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="cb-input-wrap">
          <input
            ref={inputRef}
            className="cb-input"
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            maxLength={200}
          />
          <button
            className="cb-send"
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
