import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">From Code to Creativity - Building the Future</h3>
            <p className="about-description">
              I'm Sarthak, a Computer Science undergraduate at SRM Institute of Science & Technology specializing in AI/ML and full-stack development. I maintain a 9.0 CGPA while delivering production-oriented projects during internships and coursework.
            </p>

            <p className="about-description">
              My work emphasizes practical machine learning and scalable web systems: designing efficient computer-vision pipelines, building robust APIs, and shipping features that improve user experience. I follow reproducible workflows, clean engineering practices, and collaborative development.
            </p>

            <p className="about-description">
              Beyond coding, I engage with technical communities through design and mentorship, and I enjoy interdisciplinary projects that combine design thinking with engineering to solve real problems.
            </p>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_design-portfolio-91/artifacts/s69krvln_portfolio_img.jpg" 
                alt="Sarthak" 
                className="about-profile-image"
              />
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Internships</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">9</div>
            <div className="stat-label">Current CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>

        <div className="about-achievements">
          <h4 className="achievements-title">Recent Achievements</h4>
          <div className="achievement-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-text">Smart India Hackathon Participant</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-text">JP Morgan Code For Participant </span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <span className="achievement-text">Nascomm Tech Developer Hackathon Participant</span>
            </div>
          </div>
        </div>

        <div className="about-expertise">
          <div className="expertise-item">
            <h4 className="expertise-title">AI/ML Expertise</h4>
            <p className="expertise-description">
              Building production ML systems for computer vision and NLP — image retrieval,
              object detection, and document data extraction — optimized for low-latency
              deployment (TensorFlow, PyTorch, OpenCV, FAISS).
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Full-Stack Development</h4>
            <p className="expertise-description">
              Modern web applications using React, Node.js, and JavaScript with focus on user 
              experience and scalable architecture.
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Data Structures & Algorithms</h4>
            <p className="expertise-description">
              Strong foundation in DSA with problem-solving skills, contributing to efficient 
              and optimized code solutions.
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Creative Design</h4>
            <p className="expertise-description">
              Graphic design and multimedia production using Figma, Photoshop, and Premiere 
              Pro for impactful visual communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 