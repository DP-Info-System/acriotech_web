"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapPin, ArrowRight, Briefcase, HeartHandshake, MessageSquare, CheckCircle2, Building, Megaphone, TrendingUp, FileText, Code2, Compass } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    companyWebsite: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: silently drop bot submissions
    if (formData.companyWebsite) {
      setSubmitStatus('success');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

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
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '', companyWebsite: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />
      
      {/* Hero */}
      <section style={{ background: '#FFFFFF', paddingTop: '12rem', paddingBottom: '3rem', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Contact Acriotech</h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '640px', lineHeight: 1.6, marginBottom: '1rem' }}>We&apos;re here to help. Route your inquiry to the right department or reach out to our global engineering team directly.</p>
          <p style={{ fontSize: '1.05rem', color: '#4B61B8', fontWeight: 600, marginBottom: '2rem' }}>
            Our enterprise team typically replies within 1 business day — often within 2 hours during IST working hours.
          </p>
          <a href="#direct-contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '4px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
            Start a Project <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </section>

      {/* Direct Inquiries: form above the fold */}
      <section id="direct-contact" className="scroll-mt-28" style={{ padding: '5rem 0', background: '#FAFAFA', scrollMarginTop: '100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Direct Inquiries</h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '3.5rem' }}>Fill out the form below or reach a department directly. Our global headquarters is in Bhavnagar, India.</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', flex: '1 1 300px' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building size={24} color="#4B61B8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Enterprise Sales</h3>
                  <p style={{ color: '#475569', marginBottom: '0.5rem' }}>Contact our business development team.</p>
                  <a href="mailto:info@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600, textDecoration: 'none' }}>info@acriotech.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Megaphone size={24} color="#475569" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Press & Media</h3>
                  <p style={{ color: '#475569', marginBottom: '0.5rem' }}>For PR and media inquiries.</p>
                  <a href="mailto:press@acriotech.com" style={{ color: '#475569', fontWeight: 600, textDecoration: 'none' }}>press@acriotech.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={24} color="#EF4444" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Investor Relations</h3>
                  <p style={{ color: '#475569', marginBottom: '0.5rem' }}>For shareholders and financial analysts.</p>
                  <a href="mailto:investors@acriotech.com" style={{ color: '#EF4444', fontWeight: 600, textDecoration: 'none' }}>investors@acriotech.com</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={24} color="#0F172A" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Global Headquarters</h3>
                  <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '0.5rem' }}><strong>Acriotech Global Pvt. Ltd.</strong><br />14, Shiv Narayan Complex, Virani Circle,<br />Kaliyabid, Bhavnagar - 364002<br />Gujarat, India (GMT+5:30)</p>
                  <a href="https://maps.google.com/?q=14,+Shiv+Narayan+Complex,+Virani+Circle,+Kaliyabid,+Bhavnagar+-+364002,+Gujarat,+India" target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>View on Google Maps <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)', border: '1px solid #E2E8F0', flex: '1.5 1 400px', width: '100%' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                    <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>First Name *</label>
                    <input 
                      id="firstName"
                      required
                      type="text" 
                      name="firstName"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', minWidth: '0' }}
                      onFocus={(e) => e.target.style.borderColor = '#4B61B8'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1 1 200px' }}>
                    <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Last Name *</label>
                    <input 
                      id="lastName"
                      required
                      type="text" 
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', minWidth: '0' }}
                      onFocus={(e) => e.target.style.borderColor = '#4B61B8'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Corporate Email *</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#4B61B8'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="company" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Company Name</label>
                  <input 
                    id="company"
                    type="text" 
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#4B61B8'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>How can we help? *</label>
                  <textarea 
                    id="message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = '#4B61B8'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
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
                    marginTop: '1rem',
                    background: isSubmitting ? '#475569' : '#0F172A', 
                    color: '#FFFFFF', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    fontSize: '1.05rem', 
                    fontWeight: 600,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#1E293B' }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#0F172A' }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <ArrowRight size={18} /></>
                  )}
                </button>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.5rem', textAlign: 'center', lineHeight: 1.6 }}>
                  Our enterprise team typically replies within 1 business day. By sending, you agree to our <a href="/privacy-policy" style={{ color: '#3B82F6', textDecoration: 'underline' }}>Privacy Policy</a> and <a href="/gdpr-compliance" style={{ color: '#3B82F6', textDecoration: 'underline' }}>GDPR Compliance</a>.
                </p>
                {submitStatus === 'success' && (
                  <div role="status" aria-live="polite" style={{ padding: '1rem', background: '#F0FDF4', color: '#166534', borderRadius: '8px', border: '1px solid #BBF7D0', textAlign: 'center', fontWeight: 500 }}>
                    Thank you! Your message has been sent successfully. A solutions engineer will get back to you within 1 business day.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div role="alert" aria-live="assertive" style={{ padding: '1rem', background: '#FEF2F2', color: '#991B1B', borderRadius: '8px', border: '1px solid #FECACA', textAlign: 'center', fontWeight: 500 }}>
                    Oops! Something went wrong. Please try again later or email <a href="mailto:info@acriotech.com" style={{ color: '#991B1B', fontWeight: 700 }}>info@acriotech.com</a>.
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* How we can help */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Partner with Acriotech.</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                We work with growing organisations to find new opportunities, reduce risks, and support long-term growth. Our engineering teams can help with the following:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Strategic Consultancy', 'Research Solutions', 'Digital Transformation'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600, color: '#0F172A' }}>
                    <CheckCircle2 color="#2563EB" size={24} /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.75rem', marginTop: '2.5rem', fontSize: '1rem', fontWeight: 600, color: '#0F172A' }}>
                <a href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}><FileText size={18} /> Case Studies</a>
                <a href="/work/open-source" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}><Code2 size={18} /> Open Source</a>
                <a href="/company/methodology" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0F172A', textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem' }}><Compass size={18} /> Our Methodology</a>
              </div>
            </div>
            
            <div className="contact-col" style={{ paddingLeft: '4rem', borderLeft: '1px solid #E2E8F0', flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Enterprise Inquiries</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                Whether you need a dedicated development team or a complete digital overhaul, our enterprise consultants are available. Send the form above or write to our business development team.
              </p>
              <a href="mailto:info@acriotech.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', background: '#0F172A', color: '#FFFFFF', borderRadius: '4px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Department Routing */}
      <section style={{ padding: '5rem 0', background: '#FAFAFA', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '3rem' }}>Route by Department</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            
            {/* Column 1: Careers */}
            <div className="contact-col" style={{ padding: '2rem 3rem 2rem 0', flex: '1 1 300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Briefcase size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A' }}>Careers</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '2rem', minHeight: '110px' }}>Interested in joining our engineering team? We are always looking for talented developers, cloud architects, and QA specialists who take pride in writing clean, reliable code.</p>
              <a href="/company/careers" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem', display: 'inline-block' }}>View Open Roles &rarr;</a>
            </div>

            {/* Column 2: Social Responsibility */}
            <div className="contact-col" style={{ padding: '2rem 3rem', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', flex: '1 1 300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <HeartHandshake size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A' }}>Social Responsibility</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '2rem', minHeight: '110px' }}>We believe in giving back. If you represent an NGO, non-profit, or small business working on social causes, reach out to explore how we can support your technical mission.</p>
              <a href="mailto:responsible@acriotech.com" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem', display: 'inline-block' }}>responsible@acriotech.com</a>
            </div>

            {/* Column 3: Feedback */}
            <div className="contact-col" style={{ padding: '2rem 0 2rem 3rem', flex: '1 1 300px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <MessageSquare size={22} color="#0F172A" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A' }}>Feedback System</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '2rem', minHeight: '110px' }}>Your feedback drives our continuous improvement. Whether it&apos;s a bug report, a feature request, or general thoughts on our services, we carefully review all submissions within 5 business days.</p>
              <a href="mailto:feedback@acriotech.com" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.25rem', display: 'inline-block' }}>feedback@acriotech.com</a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
