"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapPin, ArrowRight, Briefcase, HeartHandshake, MessageSquare, CheckCircle2, Building, Megaphone, TrendingUp, FileText, Code2, Compass } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryArea: 'Enterprise Software Engineering',
    message: '',
    companyWebsite: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const subject = params.get('subject');
      if (subject) {
        setFormData(prev => ({
          ...prev,
          inquiryArea: 'Technical Advisory & Consulting',
          message: prev.message || `Regarding: ${subject}\n\nPlease share the relevant architecture brief and availability for a discussion.`
        }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: silently drop bot submissions
    if (formData.companyWebsite) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formattedMessage = `[AREA OF INQUIRY]: ${formData.inquiryArea}\n\n[MESSAGE]:\n${formData.message}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formattedMessage,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          inquiryArea: 'Enterprise Software Engineering',
          message: '',
          companyWebsite: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />
      
      {/* Hero Section */}
      <section style={{ background: '#FFFFFF', paddingTop: '10rem', paddingBottom: '3.5rem', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4B61B8', marginBottom: '0.85rem' }}>
            DIRECT ENGINEERING SCOPING
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Let&apos;s find out if we&apos;re a good fit.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '680px', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            Describe what you are building. If it sounds like something we have engineered before, we will tell you how we would solve it. If it does not, we will say that directly.
          </p>
          <a 
            href="#direct-contact" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.95rem 1.8rem', 
              background: '#0F172A', 
              color: '#FFFFFF', 
              borderRadius: '2px', 
              fontWeight: 600, 
              fontSize: '0.95rem', 
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
          >
            Start a Project &rarr;
          </a>
        </div>
      </section>

      {/* Main Scoping Section */}
      <section id="direct-contact" className="scroll-mt-28" style={{ padding: '4.5rem 0', background: '#FAFAFA' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: All 4 Enterprise Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: '1 1 320px' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Direct Contact Channels
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>
                  Direct communication channels with senior engineering leadership and corporate departments.
                </p>
              </div>

              {/* 1. Enterprise Sales */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '2px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building size={22} color="#4B61B8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>Enterprise Sales</h3>
                  <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '0.35rem' }}>For new project inquiries and custom software scoping.</p>
                  <a href="mailto:info@acriotech.com" style={{ color: '#4B61B8', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>info@acriotech.com</a>
                  <a href="tel:+919408787093" style={{ color: '#4B61B8', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'block', marginTop: '0.25rem' }}>+91 9408787093</a>
                </div>
              </div>

              {/* 2. Press & Media */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '2px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Megaphone size={22} color="#475569" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>Press &amp; Media</h3>
                  <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '0.35rem' }}>For press releases, media kits, and analyst inquiries.</p>
                  <a href="mailto:press@acriotech.com" style={{ color: '#475569', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>press@acriotech.com</a>
                </div>
              </div>

              {/* 3. Investor Relations */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '2px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={22} color="#2563EB" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>Investor Relations</h3>
                  <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '0.35rem' }}>For shareholders, financial analysts, and corporate governance.</p>
                  <a href="mailto:investors@acriotech.com" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>investors@acriotech.com</a>
                </div>
              </div>

              {/* 4. Global Headquarters */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '2px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#0F172A" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>Global Headquarters</h3>
                  <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    <strong>Acriotech Global Pvt. Ltd.</strong><br />
                    14, Shiv Narayan Complex, Virani Circle,<br />
                    Kaliyabid, Bhavnagar &ndash; 364002<br />
                    Gujarat, India
                  </p>
                  <a href="https://maps.google.com/?q=14,+Shiv+Narayan+Complex,+Virani+Circle,+Kaliyabid,+Bhavnagar+-+364002,+Gujarat,+India" target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Open in Google Maps <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Executive Enterprise Contact Form */}
            <div 
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '2px', 
                boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)', 
                border: '1px solid #CBD5E1', 
                flex: '1.5 1 440px', 
                width: '100%',
                overflow: 'hidden',
                padding: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Area of Inquiry Dropdown */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="inquiryArea" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                    Area of Inquiry *
                  </label>
                  <select
                    id="inquiryArea"
                    name="inquiryArea"
                    value={formData.inquiryArea}
                    onChange={handleChange}
                    style={{ 
                      padding: '0.8rem 1rem', 
                      borderRadius: '2px', 
                      border: '1px solid #CBD5E1', 
                      fontSize: '0.95rem', 
                      background: '#FFFFFF', 
                      color: '#0F172A', 
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#2563EB'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; }}
                  >
                    <option value="Enterprise Software Engineering">Enterprise Software Engineering</option>
                    <option value="AI & Intelligent Automation">AI &amp; Intelligent Automation</option>
                    <option value="Cloud Infrastructure & SRE">Cloud Infrastructure &amp; SRE</option>
                    <option value="Dedicated Engineering Pod">Dedicated Engineering Pod</option>
                    <option value="Architecture Audit & Review">Architecture Audit &amp; Review</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Name Fields */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                    <label htmlFor="firstName" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>First Name *</label>
                    <input 
                      id="firstName"
                      required
                      type="text" 
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '2px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', minWidth: '0' }}
                      onFocus={(e) => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                    <label htmlFor="lastName" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>Last Name *</label>
                    <input 
                      id="lastName"
                      required
                      type="text" 
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '2px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', minWidth: '0' }}
                      onFocus={(e) => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                {/* Email & Company */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                    <label htmlFor="email" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>Corporate Email *</label>
                    <input 
                      id="email"
                      required
                      type="email" 
                      name="email"
                      autoComplete="email"
                      placeholder="jane.smith@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '2px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', minWidth: '0' }}
                      onFocus={(e) => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                    <label htmlFor="company" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>Company Name</label>
                    <input 
                      id="company"
                      type="text" 
                      name="company"
                      autoComplete="organization"
                      placeholder="Acme Enterprises"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '2px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', minWidth: '0' }}
                      onFocus={(e) => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                    How can we help? *
                  </label>
                  <textarea 
                    id="message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project goals, technical requirements, or timeline..."
                    style={{ padding: '1rem', borderRadius: '2px', border: '1px solid #CBD5E1', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', resize: 'vertical' }}
                    onFocus={(e) => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#CBD5E1'; e.target.style.boxShadow = 'none'; }}
                  ></textarea>
                </div>

                {/* Honeypot field for bots */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden', opacity: 0 }} aria-hidden="true">
                  <label htmlFor="companyWebsite">Website</label>
                  <input
                    id="companyWebsite"
                    type="text"
                    name="companyWebsite"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    marginTop: '0.5rem',
                    background: isSubmitting ? '#475569' : '#0F172A', 
                    color: '#FFFFFF', 
                    padding: '1rem 1.75rem', 
                    borderRadius: '2px', 
                    fontSize: '1rem', 
                    fontWeight: 700,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                    boxShadow: '0 8px 16px rgba(15, 23, 42, 0.15)'
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#1E293B' }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#0F172A' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                {submitStatus === 'success' && (
                  <div role="status" aria-live="polite" style={{ padding: '1rem', background: '#F0FDF4', color: '#166534', borderRadius: '2px', border: '1px solid #BBF7D0', textAlign: 'center', fontWeight: 500, fontSize: '0.92rem' }}>
                    Thank you! Your message has been received. Our team will review and respond shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div role="alert" aria-live="assertive" style={{ padding: '1rem', background: '#FEF2F2', color: '#991B1B', borderRadius: '2px', border: '1px solid #FECACA', textAlign: 'center', fontWeight: 500, fontSize: '0.92rem' }}>
                    Something went wrong. Please try again or email us directly at <a href="mailto:info@acriotech.com" style={{ color: '#991B1B', fontWeight: 700 }}>info@acriotech.com</a>.
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Restored Rich 2-Column Section */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left: Partner with Acriotech */}
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Partner with Acriotech.
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                We work best with organisations that have a specific technical challenge and want it solved properly. Here is the type of work we take on:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Architecture & Technical Strategy', 
                  'System Audits & Legacy Modernisation', 
                  'Product Engineering & Platform Builds'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A' }}>
                    <span style={{ color: '#4B61B8', fontWeight: 700 }}>&mdash;</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem', marginTop: '2.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#0F172A' }}>
                <a href="/work/featured-projects" style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}>
                  Case Studies
                </a>
                <a href="/work/open-source" style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}>
                  Open Source
                </a>
                <a href="/company/methodology" style={{ color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}>
                  Our Methodology
                </a>
              </div>
            </div>
            
            {/* Right: Enterprise Inquiries */}
            <div className="contact-col" style={{ paddingLeft: '4rem', borderLeft: '1px solid #E2E8F0', flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                Ready to scope something?
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                We take on new projects a few times a year. If the scope and timing align, we will tell you directly. Send the form above or write to the team.
              </p>
              <a href="mailto:info@acriotech.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '2px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                Contact Sales
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section style={{ padding: '5rem 0', background: '#FAFAFA', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
            Right department, right inbox
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Column 1: Careers */}
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Briefcase size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>Careers</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.92rem', marginBottom: '1.5rem', minHeight: '80px' }}>
                We are a small team and we hire carefully. If you write clean code and want to work on systems with real consequences, check the open roles.
              </p>
              <a href="/company/careers" style={{ color: '#4B61B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                View Open Roles &rarr;
              </a>
            </div>

            {/* Column 2: Social Responsibility */}
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <HeartHandshake size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>Social Responsibility</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.92rem', marginBottom: '1.5rem', minHeight: '80px' }}>
                We believe in giving back. If you represent an NGO, non-profit, or small business working on social causes, reach out to explore how we can support your technical mission.
              </p>
              <a href="mailto:responsible@acriotech.com" style={{ color: '#4B61B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                responsible@acriotech.com &rarr;
              </a>
            </div>

            {/* Column 3: Feedback */}
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <MessageSquare size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>Feedback System</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.92rem', marginBottom: '1.5rem', minHeight: '80px' }}>
                Spotted something broken, missing, or confusing? Tell us directly. We review every submission and act on the ones that matter.
              </p>
              <a href="mailto:feedback@acriotech.com" style={{ color: '#4B61B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                feedback@acriotech.com &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
