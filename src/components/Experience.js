import './Experience.css';

// Inline SVG icons to match the reference style
const CalendarIcon = ({ className = '' }) => (
  <svg className={`icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
  </svg>
);

const LocationIcon = ({ className = '' }) => (
  <svg className={`icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

const BuildingIcon = ({ className = '' }) => (
  <svg className={`icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="13" height="13" rx="2" />
    <path d="M16 21V3h5v18" />
    <path d="M7 10h3M7 14h3M7 18h3" />
  </svg>
);

const ClipIcon = ({ className = '' }) => (
  <svg className={`icon ${className}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a4 4 0 1 1 5.66 5.66l-9.2 9.19a2.5 2.5 0 1 1-3.54-3.54l8.49-8.49" />
  </svg>
);

const GraduationCapIcon = ({ className = '' }) => (
  <svg className={`grade-svg ${className}`} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 3L2 7l10 4 10-4-10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M7 9.5v3.5c0 1.5 3 3 5 3s5-1.5 5-3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 14.5c0 .55-.9 1-2 1s-2-.45-2-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="17.2" cy="8.5" r="0.6" fill="currentColor" />
  </svg>
);

const Experience = () => {
  const resumeFileName = 'Sarthak_Rastogi_Resume.pdf';
  const resumeVersion = '20260421';
  const resumeHref = process.env.PUBLIC_URL
    ? `${process.env.PUBLIC_URL}/${resumeFileName}?v=${resumeVersion}`
    : `${resumeFileName}?v=${resumeVersion}`;

  const experiences = [
    {
      id: 1,
      title: "Data Analyst and AI/ML Intern",
      company: "ProcMart India",
      period: "May 2025 - Present",
      location: "Noida/Remote",
      description: "Leading AI/ML development for e-commerce solutions, focusing on computer vision and automated product management systems.",
      achievements: [
        "Developed lightning-fast image search tool achieving sub-1 second retrieval times",
        "Built smart text-adding system for automatic product image annotation", 
        "Implemented FAISS-powered visual database for product matching",
        "Created automated blank region detection for optimal text placement"
      ],
      technologies: ["Python", "OpenCV", "FAISS", "Computer Vision", "Image Processing"]
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Brainwave Matrix Solutions", 
      period: "March 2025 - June 2025",
      location: "Noida/Remote",
      description: "Full-stack development of web applications with focus on user experience and scalable architecture.",
      achievements: [
        "Designed and developed blogging platform with complete content management",
        "Built day planner website with responsive, user-friendly interfaces",
        "Implemented secure user authentication and authorization systems",
        "Created RESTful APIs ensuring data integrity and optimal performance"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"]
    },
    {
      id: 3,
      title: "Creatives Team Member",
      company: "Github Community SRM",
      period: "Oct 2024 - March 2025", 
      location: "Kattankulathur",
      description: "Leading creative design and multimedia production for technical events and community engagement.",
      achievements: [
        "Designed visual assets for events, workshops, and promotions",
        "Led media and communications for Ossome Hacks 2.0 hackathon",
        "Enhanced brand identity through creative design and video production",
        "Managed social media outreach maximizing engagement and participation"
      ],
      technologies: ["Figma", "Photoshop", "Canva", "Premiere Pro", "Social Media Management"]
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Achal Welfare Foundation",
      period: "Oct 2023 - Jan 2025",
      location: "Ghaziabad/Chennai",
      description: "Created impactful visual designs for digital and print media to enhance brand identity and user engagement.",
      achievements: [
        "Created visually impactful designs for digital and print media",
        "Collaborated with teams to enhance brand identity and engagement",
        "Delivered consistent design quality across multiple platforms",
        "Contributed to social impact initiatives through creative design"
      ],
      technologies: ["Figma", "Photoshop", "Canva", "Print Design", "Digital Media"]
    }
  ];

  const stats = [
    { number: "4+", label: "Active Roles" },
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "3", label: "Industries" }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "SRM Institute of Science & Technology",
      location: "Kattankulathur",
      period: "2023 - Present",
  grade: "9 CGPA",
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate (12th)",
      institution: "Delhi Public School Ghaziabad",
      location: "Ghaziabad",
      period: "2023",
      grade: "78%",
      status: "Completed"
    },
    {
      degree: "Matriculation (10th)",
      institution: "Delhi Public School Ghaziabad",
      location: "Ghaziabad",
      period: "2021",
      grade: "90%",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">
          From graphic design to AI/ML engineering - a journey of continuous learning, 
          real-world impact, and technical excellence across diverse domains.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
              <div className="timeline-card">
                <div className="card-meta">
                  <div className="meta-date">
                    <CalendarIcon className="calendar-svg" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-location">
                    <LocationIcon className="location-svg" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <h3 className="job-title">{exp.title}</h3>
                <h4 className="company-name">
                  <BuildingIcon className="building-svg" />
                  {exp.company}
                </h4>
                
                <p className="job-description">{exp.description}</p>

                <div className="achievements-section">
                  <h5 className="achievements-title">
                    <ClipIcon className="clip-svg" />
                    Key Achievements:
                  </h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-section">
                  <h6 className="tech-title">Technologies Used:</h6>
                  <div className="tech-badges">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h3 className="education-title">Educational Journey</h3>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4 className="education-degree">{edu.degree}</h4>
                <h5 className="education-institution">{edu.institution}</h5>
                <div className="education-details">
                  <span className="education-location">{edu.location}</span>
                  <span className="education-period">• {edu.period}</span>
                </div>
                <div className="education-grade">
                  <span className="grade-icon" aria-hidden="true">
                    <GraduationCapIcon />
                  </span>
                  <span className="grade-text">{edu.grade} {edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="currently-available">
          <div className="availability-card">
            <h3 className="availability-title">Currently Exploring New Opportunities</h3>
            <p className="availability-text">
              Actively seeking full-time opportunities in AI/ML engineering and full-stack 
              development. Ready to contribute to innovative projects and continue learning 
              cutting-edge technologies!
            </p>
            <div className="availability-actions">
              <span className="availability-label">Let's Connect</span>
              <div className="social-icons">
                <a
                  href="https://github.com/your-username"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="24" height="24">
                    <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.016-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.045.138 3.004.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.476 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sarthak-rastogi-951811290/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="24" height="24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM7.5 8h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 3.18 0 5.87 2.6 5.87 7.33V24h-5V15.5c0-2.0-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>

                <a href={resumeHref} className="btn btn-primary" download="Sarthak_Rastogi_Resume.pdf">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 
