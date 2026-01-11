import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center">
            <h2 className="title">Get In Touch</h2>
            <p className="subtitle">Ready to start your project? Contact us today.</p>
        </div>

        <div style={{
            backgroundColor: 'var(--card-bg)',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="flex gap-4" style={{ flexDirection: window.innerWidth <= 600 ? 'column' : 'row' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
                        <input type="text" placeholder="John Doe" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit'
                        }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                        <input type="email" placeholder="john@example.com" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit'
                        }} />
                    </div>
                </div>
                
                <div>
                     <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Subject</label>
                        <select style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit'
                        }}>
                            <option>General Inquiry</option>
                            <option>Project Proposal</option>
                            <option>Support</option>
                        </select>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                    <textarea rows="5" placeholder="Tell us about your project..." style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            fontFamily: 'inherit',
                            resize: 'vertical'
                    }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Send Message</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
