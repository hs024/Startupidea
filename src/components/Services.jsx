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
    <section id="services" className="section bg-bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Our Services</h2>
          <p className="subtitle">High-end digital solutions for your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesFunction.map((service, index) => (
            <div key={index} className="bg-card-bg p-8 rounded-2xl border border-border transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_var(--accent-glow)] hover:border-accent-blue group">
              <div className="text-5xl mb-4 drop-shadow-[0_0_20px_var(--accent-glow)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
