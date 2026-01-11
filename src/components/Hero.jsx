import robotImg from '../assets/hero-robot.png';

const Hero = () => {
  return (
    <section id="hero" className="section" style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden'
    }}>
      {/* Background Glow Effects */}
      <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
          borderRadius: '50%',
          zIndex: -1,
          filter: 'blur(80px)',
          opacity: 0.6
      }}></div>
      
       <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 60%)',
          borderRadius: '50%',
          zIndex: -1,
          filter: 'blur(80px)',
          opacity: 0.4
      }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div style={{ zIndex: 1 }}>
          <h1 style={{ 
              fontSize: 'min(4.5rem, 15vw)', 
              lineHeight: 1.1, 
              marginBottom: '1.5rem',
              fontWeight: 800,
              color: 'var(--text-primary)'
          }}>
            Watch your <br />
            <span style={{ 
                 background: 'var(--gradient-main)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
            }}>brand grow.</span>
          </h1>
          <p className="subtitle" style={{ margin: '0 0 2.5rem 0', maxWidth: '500px', fontSize: '1.2rem' }}>
            Transform your digital presence with high-performance web solutions. We blend aesthetics with logic.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn" style={{ 
                background: 'var(--gradient-main)', 
                color: 'white', 
                padding: '1rem 2rem',
                borderRadius: '50px',
                boxShadow: '0 10px 30px var(--accent-glow)'
            }}>Get Started</a>
            <a href="#services" className="btn" style={{ 
                border: '1px solid var(--border-color)', 
                padding: '1rem 2rem',
                borderRadius: '50px',
                backdropFilter: 'blur(5px)'
            }}>Learn More</a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            position: 'relative',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                animation: 'float 6s ease-in-out infinite'
            }}>
                <style>
                    {`@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }`}
                </style>
                <img src={robotImg} alt="Futuristic Robot" style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px -12px var(--accent-glow)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
