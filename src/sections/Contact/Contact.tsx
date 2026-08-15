import React, { useState } from 'react';
import type { ContactFormData } from '../../types';

/* --- Common Components --- */
// Replacing raw HTML with your established common UI components
import { SectionHeader } from '../../components/ui/SectionHeader';
import { IconBadge } from '../../components/ui/IconBadge';
import Spinner from '../../components/ui/Spinner'; 


type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/* --- Local Data Separation --- */
// Extracted outside the component render cycle to keep JSX clean
const contactDetails = [
  {
    id: 'email',
    label: 'Email Us',
    value: 'support@supernova-audio.com',
    href: 'mailto:support@supernova-audio.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Direct Line',
    value: '+1 (800) 555-0199',
    href: 'tel:+18005550199',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: 'address',
    label: 'HQ Address',
    value: '777 Audio Tech Way, San Francisco, CA 94107',
    href: null, // No href for physical address in this design
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate an API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });

      // Revert status back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] text-white relative overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy & Detailed Info Cards */}
          <div>
            {/* for contact section, section header component */ }
            <SectionHeader 
              subtitle="Support & Inquiries"
              title="Connect With The Audio Architects"
              description="Whether you are integrating SUPERNOVA into a studio rig or have technical questions about the architecture, our engineering team is standing by to assist."
              className="text-left ml-0 mb-10"
            />

            {/* Contact Details List */}
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.id} className="flex items-center gap-4 text-slate-300 group">
                  
                  {/* for contact section, icon badge component */}
                  <IconBadge 
                    icon={detail.icon} 
                    className="w-12 h-12 rounded-2xl bg-[#131B2E] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all"
                  />
                  
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">{detail.label}</div>
                    {detail.href ? (
                      <a href={detail.href} className="text-slate-200 hover:text-cyan-300 font-medium transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-slate-200 font-medium block">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="bg-[#131B2E]/90 border border-slate-800/80 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-300">
                {/* for contact section, success icon badge */}
                <IconBadge 
                  icon={
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  }
                  className="w-16 h-16 bg-cyan-400/20 text-cyan-400 rounded-full flex items-center justify-center mb-4 border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                />
                <h4 className="text-2xl font-bold text-white mb-2">Message Received</h4>
                <p className="text-slate-400">Our engineering team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 focus:outline-none transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 focus:outline-none transition-all duration-200"
                    placeholder="studio@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/80 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="How can we assist with your setup?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-cyan-400 text-slate-950 font-bold px-6 py-4 rounded-xl hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 group"
                >
                  {status === 'submitting' ? (
                    <>
                      {/* for contact section, spinner component */}
                      <Spinner className="h-5 w-5 text-slate-950" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}