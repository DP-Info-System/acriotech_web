"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Building, Mail, Phone, Bot } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'contact'>('chat');
  
  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: 'Hi! I am the Acriotech assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Cookie Banner Visibility State for collision avoidance
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem("cookieConsent") : null;
    if (!consent) {
      setIsCookieBannerVisible(true);
    }

    const handleBannerVisibility = (e: any) => {
      setIsCookieBannerVisible(Boolean(e.detail?.isVisible));
    };

    window.addEventListener('cookieBannerVisibility', handleBannerVisibility);
    return () => {
      window.removeEventListener('cookieBannerVisibility', handleBannerVisibility);
    };
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      
      const data = await res.json();
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
      }, 600); // Simulate network delay for natural feel
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting right now.' }]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || nameParts[0] || '';

      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          firstName,
          lastName,
          companyName: formData.companyName,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message
        })
      });
      
      if (res.ok) {
        setFormStatus('success');
        setFormData({ fullName: '', companyName: '', email: '', mobile: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Acriotech Support chat"
        className={isCookieBannerVisible ? "bottom-24" : "bottom-6"}
        style={{
          position: 'fixed',
          bottom: isCookieBannerVisible ? '96px' : '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '2px',
          background: '#0F172A',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 10px 25px rgba(15,23,42,0.2)',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'bottom 0.3s ease'
        }}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '380px',
              maxWidth: 'calc(100vw - 48px)',
              height: '600px',
              maxHeight: 'calc(100vh - 48px)',
              background: '#FFFFFF',
              borderRadius: '2px',
              boxShadow: '0 25px 50px -12px rgba(15,23,42,0.25)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 9999,
              border: '1px solid #E2E8F0'
            }}
          >
            {/* Header */}
            <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: '#FFFFFF' }}>Acriotech Support</h3>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>We usually reply instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={24} />
              </button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
              <button 
                onClick={() => setActiveTab('chat')}
                style={{ flex: 1, padding: '12px', background: 'transparent', border: 'none', borderBottom: activeTab === 'chat' ? '2px solid #3B82F6' : '2px solid transparent', color: activeTab === 'chat' ? '#0F172A' : '#64748B', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Quick Inquiry
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                style={{ flex: 1, padding: '12px', background: 'transparent', border: 'none', borderBottom: activeTab === 'contact' ? '2px solid #3B82F6' : '2px solid transparent', color: activeTab === 'contact' ? '#0F172A' : '#64748B', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Contact Sales
              </button>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, overflowY: 'auto', background: activeTab === 'chat' ? '#FFFFFF' : '#F8FAFC' }}>
              
              {activeTab === 'chat' && (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
                    {messages.map((msg, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{ 
                          maxWidth: '85%', 
                          padding: '12px 16px', 
                          borderRadius: '2px', 
                          background: msg.role === 'user' ? '#3B82F6' : '#F1F5F9',
                          color: msg.role === 'user' ? '#FFFFFF' : '#0F172A',
                          borderBottomRightRadius: msg.role === 'user' ? '4px' : '12px',
                          borderBottomLeftRadius: msg.role === 'bot' ? '4px' : '12px',
                          fontSize: '0.95rem',
                          lineHeight: 1.5
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ background: '#F1F5F9', padding: '12px 16px', borderRadius: '12px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                          <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%' }}></div>
                          <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%', animationDelay: '0.2s' }}></div>
                          <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%', animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <div style={{ padding: '16px', borderTop: '1px solid #E2E8F0', background: '#FFFFFF' }}>
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
                      <input 
                        type="text" 
                        placeholder="Ask a question..." 
                        value={inputMessage}
                        onChange={e => setInputMessage(e.target.value)}
                        style={{ flex: 1, padding: '12px 16px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', background: '#F8FAFC' }}
                      />
                      <button 
                        type="submit"
                        disabled={!inputMessage.trim()}
                        style={{ width: '42px', height: '42px', borderRadius: '2px', background: inputMessage.trim() ? '#3B82F6' : '#E2E8F0', color: '#FFFFFF', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: inputMessage.trim() ? 'pointer' : 'default', transition: 'background 0.2s' }}
                      >
                        <Send size={18} style={{ marginLeft: '2px' }} />
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div style={{ padding: '16px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {formStatus === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '30px 16px' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '28px', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <Send size={28} color="#059669" />
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '6px' }}>Message Sent!</h4>
                      <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Our sales team will be in touch with you shortly.</p>
                      <button onClick={() => setFormStatus('idle')} style={{ marginTop: '16px', background: '#F1F5F9', color: '#0F172A', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Send another</button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Full Name *</label>
                        <div style={{ position: 'relative' }}>
                          <User size={15} color="#94A3B8" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                          <input required type="text" placeholder="John Doe" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem' }} />
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Company Name</label>
                        <div style={{ position: 'relative' }}>
                          <Building size={15} color="#94A3B8" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                          <input type="text" placeholder="Acme Inc." value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem' }} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Email *</label>
                          <div style={{ position: 'relative' }}>
                            <Mail size={15} color="#94A3B8" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                            <input required type="email" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Mobile *</label>
                          <div style={{ position: 'relative' }}>
                            <Phone size={15} color="#94A3B8" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                            <input required type="tel" placeholder="+1 (555) 000-0000" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem' }} />
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569' }}>Message *</label>
                        <textarea required placeholder="How can we help?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} style={{ width: '100%', padding: '8px 10px', borderRadius: '2px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem', resize: 'none' }} />
                      </div>

                      {formStatus === 'error' && (
                        <p style={{ color: '#EF4444', fontSize: '0.8rem', margin: 0 }}>Something went wrong. Please try again.</p>
                      )}

                      <button type="submit" disabled={formStatus === 'loading'} style={{ background: '#0F172A', color: '#FFFFFF', padding: '10px', borderRadius: '2px', border: 'none', fontWeight: 600, fontSize: '0.9rem', cursor: formStatus === 'loading' ? 'not-allowed' : 'pointer', marginTop: '4px', opacity: formStatus === 'loading' ? 0.7 : 1 }}>
                        {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
            
            <style jsx>{`
              @keyframes blink {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 1; }
              }
              .typing-dot {
                animation: blink 1.4s infinite;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
