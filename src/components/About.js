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
              I'm Sarthak, a Computer Science undergraduate at SRM Institute of Science & Technology specializing in AI/ML, data analytics, and full-stack development. I maintain an 8.9 CGPA while building production-oriented systems across internships, research-driven work, and personal projects.
            </p>

            <p className="about-description">
              My work focuses on scalable data pipelines, AI-driven applications, and backend systems that turn complex data into actionable insights. I enjoy building NLP and computer vision workflows, analytics dashboards, and end-to-end products that balance strong engineering with practical business impact.
            </p>

            <p className="about-description">
              Beyond coding, I stay involved in technical communities through design and creative work, and I enjoy interdisciplinary projects where engineering, usability, and visual communication come together to solve real problems.
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

        <div className="about-expertise">
          <div className="expertise-item">
            <h4 className="expertise-title">AI/ML Expertise</h4>
            <p className="expertise-description">
              Building applied AI systems across NLP, computer vision, deep learning, RAG,
              and LLM fine-tuning - from OCR-based document intelligence and anomaly
              detection to real-time inference pipelines using TensorFlow, PyTorch, OpenCV,
              and FAISS.
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Full-Stack Development</h4>
            <p className="expertise-description">
              End-to-end web applications with React, Node.js, APIs, authentication, and
              database integration, along with deployment-minded workflows using Docker,
              Kubernetes, PostgreSQL, and MongoDB for scalable systems.
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Data Structures & Algorithms</h4>
            <p className="expertise-description">
              Strong foundation in DSA, OOP, DBMS, and problem solving, helping me design
              efficient code, optimize system behavior, and approach engineering challenges
              with a structured mindset.
            </p>
          </div>
          <div className="expertise-item">
            <h4 className="expertise-title">Creative Design</h4>
            <p className="expertise-description">
              Graphic design and multimedia production using Figma, Photoshop, and Premiere
              Pro to create impactful visuals for communities, events, and digital products
              with a strong focus on communication and brand presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
