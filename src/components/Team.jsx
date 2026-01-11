import React from 'react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    img: 'https://via.placeholder.com/150/3b82f6/ffffff?text=AJ' // Placeholder for now
  },
  {
    name: 'Sarah Lee',
    role: 'Creative Director',
    img: 'https://via.placeholder.com/150/3b82f6/ffffff?text=SL'
  },
  {
    name: 'Mike Chen',
    role: 'Product Manager',
    img: 'https://via.placeholder.com/150/3b82f6/ffffff?text=MC'
  }
];

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="text-center">
            <h2 className="title">Meet the Team</h2>
            <p className="subtitle">The minds behind the innovation.</p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {teamMembers.map((member, index) => (
                <div key={index} style={{
                    backgroundColor: 'var(--card-bg)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        overflow: 'hidden',
                        border: '3px solid var(--accent-blue)',
                        boxShadow: '0 0 20px var(--accent-glow)'
                    }}>
                         {/* Using a colored div as placeholder if image fails or just for style */}
                        <div style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                            {member.name.charAt(0)}
                        </div>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
