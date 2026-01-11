import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-bg-secondary">
      <div className="container max-w-4xl">
        <div className="text-center">
            <h2 className="title">Get In Touch</h2>
            <p className="subtitle">Ready to start your project? Contact us today.</p>
        </div>

        <div className="bg-card-bg p-12 rounded-2xl border border-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
            <form className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block mb-2 font-semibold">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full p-4 rounded-lg border border-border bg-bg-primary text-text-primary focus:border-accent-blue focus:ring-2 focus:ring-accent-glow focus:outline-none transition-all" />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-2 font-semibold">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-lg border border-border bg-bg-primary text-text-primary focus:border-accent-blue focus:ring-2 focus:ring-accent-glow focus:outline-none transition-all" />
                    </div>
                </div>
                
                <div>
                     <label className="block mb-2 font-semibold">Subject</label>
                        <select className="w-full p-4 rounded-lg border border-border bg-bg-primary text-text-primary focus:border-accent-blue focus:ring-2 focus:ring-accent-glow focus:outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Project Proposal</option>
                            <option>Support</option>
                        </select>
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Message</label>
                    <textarea rows="5" placeholder="Tell us about your project..." className="w-full p-4 rounded-lg border border-border bg-bg-primary text-text-primary focus:border-accent-blue focus:ring-2 focus:ring-accent-glow focus:outline-none transition-all resize-y"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full p-4 text-center">Send Message</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
