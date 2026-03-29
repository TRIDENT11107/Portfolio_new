import './Hero.css';

const Hero = () => {
  const resumeFileName = 'Sarthak_Rastogi_Resume.pdf';
  const resumeHref = process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/${resumeFileName}`
    : resumeFileName;

  // Generate simple particles - bright white dots and bright comets
  const generateParticles = () => {
    const particles = [];
    
    // Small bright white dots moving from left to right
    for (let i = 0; i < 35; i++) {
      particles.push(
        <div
          key={`white-dot-${i}`}
          className="particle white-dot"
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`
          }}
        />
      );
    }
    
    // Bright comets (fewer count but very bright)
    for (let i = 0; i < 6; i++) {
      particles.push(
        <div
          key={`bright-comet-${i}`}
          className="particle bright-comet"
          style={{
            top: `${5 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      );
    }
    
    return particles;
  };

  return (
    <section id="home" className="hero">      
      {/* Enhanced meteor/comet particle system */}
      <div className="hero-particles">
        {generateParticles()}
      </div>

      {/* System Online Badge */}
      <div className="hero-status-badge">
        <span className="status-indicator"></span>
        <span className="status-text">SYSTEM ONLINE</span>
      </div>
      
      <div className="hero-content">
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src="/portfolio_img.jpg" 
              alt="Sarthak" 
              className="hero-profile-image"
            />
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Sarthak</span></h1>
          <h2 className="hero-subtitle">AI/ML Engineer & <span className="highlight-blue">Full-Stack Developer</span></h2>
          <p className="hero-description">
            Transforming ideas into intelligent solutions through code and creativity
          </p>
          
          <div className="hero-social">
            <a href="https://github.com/TRIDENT11107" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-white" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sarthak-rastogi-951811290/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:rastogisarthak84@gmail.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Explore My Journey</a>
            <a href={resumeHref} download="Sarthak_Rastogi_Resume.pdf" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
