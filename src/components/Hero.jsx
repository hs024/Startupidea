import robotImg from '../assets/hero-robot.png';



const Hero = () => {
  return (
    <section id="hero" className="section min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full -z-10 blur-[80px] opacity-60 bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_60%)]"></div>
      
       <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full -z-10 blur-[80px] opacity-40 bg-[radial-gradient(circle,rgba(167,139,250,0.3)_0%,transparent_60%)]"></div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-[min(4.5rem,15vw)] leading-[1.1] mb-6 font-extrabold text-text-primary">
            Watch your <br />
            <span className="bg-gradient-main bg-clip-text text-transparent">
              brand grow.
            </span>
          </h1>
          <p className="subtitle mb-10 max-w-[500px] text-lg mx-auto md:mx-0">
            Transform your digital presence with high-performance web solutions. We blend aesthetics with logic.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-main text-white font-bold shadow-[0_10px_30px_var(--accent-glow)] hover:translate-y-[-2px] hover:shadow-[0_15px_40px_var(--accent-glow)] transition-all">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 rounded-full border border-border backdrop-blur-sm hover:bg-white/5 transition-all">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center relative">
            <div className="w-full max-w-[600px] relative animate-float">
                <img src={robotImg} alt="Futuristic Robot" className="w-full h-auto rounded-3xl shadow-[0_20px_50px_-12px_var(--accent-glow)] border border-white/10" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


