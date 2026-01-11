import React from 'react';

const servicesFunction = [
  {
    title: 'Web Development',
    description: 'Custom React applications built for speed and performance.',
    icon: '💻'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive designs that focus on user experience and conversion.',
    icon: '✨'
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher with our blue-light logic optimization strategies.',
    icon: '🚀'
  }
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="title">Our Services</h2>
          <p className="subtitle">High-end digital solutions for your business.</p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {servicesFunction.map((service, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px var(--accent-glow)';
              e.currentTarget.style.borderColor = 'var(--accent-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            >
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem', 
                textShadow: '0 0 20px var(--accent-glow)' 
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
