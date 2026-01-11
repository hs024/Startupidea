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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-card-bg rounded-2xl overflow-hidden border border-border text-center p-8">
                    <div className="w-[120px] h-[120px] rounded-full mx-auto mb-6 overflow-hidden border-[3px] border-accent-blue shadow-[0_0_20px_var(--accent-glow)]">
                         {/* Using a colored div as placeholder if image fails or just for style */}
                        <div className="w-full h-full bg-bg-secondary flex items-center justify-center text-3xl">
                            {member.name.charAt(0)}
                        </div>
                    </div>
                    <h3 className="text-xl mb-2 font-semibold">{member.name}</h3>
                    <p className="text-accent-blue font-semibold">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
