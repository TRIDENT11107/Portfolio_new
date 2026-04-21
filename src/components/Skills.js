import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "AI/ML & Data Science",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "OpenCV", level: 90 },
        { name: "FAISS", level: 88 },
        { name: "NumPy & Pandas", level: 92 },
        { name: "Scikit-learn", level: 85 },
        { name: "NLP (SpaCy, NLTK)", level: 80 }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Express.js", level: 82 },
        { name: "RESTful APIs", level: 88 },
        { name: "Responsive Design", level: 90 },
        { name: "Authentication Systems", level: 85 }
      ]
    },
    {
      name: "Programming & DSA",
      skills: [
        { name: "C++", level: 90 },
        { name: "C Programming", level: 88 },
        { name: "Java", level: 85 },
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Competitive Programming", level: 80 },
        { name: "System Design", level: 75 }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Flask", level: 88 },
        { name: "Figma", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Premiere Pro", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Python For Data Science",
      provider: "IBM Developers Skill Network",
      year: "2024",
      category: "Data Science",
      link: "https://www.linkedin.com/posts/sarthak-rastogi-951811290_python-for-data-science-ibm-python-101-certification-activity-7296960854346940418-xRrg?utm_source=share&utm_medium=member_android&rcm=ACoAAEaZfQ0BPx3OaJByRZ2vV6yod2UaBV1Rp1Y"
    },
    {
      name: "Java Programming",
      provider: "NPTEL - IIT Kharagpur",
      year: "2024",
      category: "Programming",
      link: "https://www.linkedin.com/posts/sarthak-rastogi-951811290_certified-in-java-programming-activity-7282469047336587264-8_09?utm_source=share&utm_medium=member_android&rcm=ACoAAEaZfQ0BPx3OaJByRZ2vV6yod2UaBV1Rp1Y"
    },
    {
      name: "C++ Programming",
      provider: "NPTEL - IIT Kharagpur",
      year: "2024",
      category: "Programming",
      link: "https://www.linkedin.com/posts/sarthak-rastogi-951811290_nptel-exam-certificate-in-modern-c-activity-7210210455896657920-45E6?utm_source=share&utm_medium=member_android&rcm=ACoAAEaZfQ0BPx3OaJByRZ2vV6yod2UaBV1Rp1Y"
    },
    {
      name: "Database For Developers: Foundations",
      provider: "Oracle",
      year: "2024",
      category: "Database"
    }
  ];

  const currentlyWorking = [
    { icon: 'robot', category: 'AI/ML', tools: 'TensorFlow, OpenCV' },
    { icon: 'globe', category: 'Web Dev', tools: 'React, Node.js' },
    { icon: 'bolt', category: 'DSA', tools: 'C++, Problem Solving' },
    { icon: 'palette', category: 'Design', tools: 'Figma, Photoshop' }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle">
          A diverse toolkit spanning AI/ML, full-stack development, competitive
          programming, and creative design - built through hands-on projects and real-world
          applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category card">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section">
          <h3 className="certifications-title">Certifications & Learning</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item" style={{ position: 'relative' }}>
                <div className="cert-badge">{cert.category}</div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
                <div className="cert-year">{cert.year}</div>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate-btn"
                  >
                    View Certificate
                  </a>
                ) : cert.provider && cert.provider.toLowerCase().includes('oracle') ? (
                  <span className="view-certificate-btn pending" aria-disabled="true" title="Link coming soon">View Certificate</span>
                ) : (
                  <span className="view-certificate-btn disabled" aria-disabled="true">View Certificate</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="currently-working">
          <h3 className="currently-working-title">Currently Working With</h3>
          <div className="currently-working-grid">
            {currentlyWorking.map((item, index) => (
              <div key={index} className="working-item">
                <span className="working-icon" aria-hidden="true">
                  {item.icon === 'robot' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="3" y="7" width="18" height="11" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
                      <rect x="7" y="3" width="10" height="4" rx="1" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
                      <circle cx="9" cy="12" r="1.6" fill="#14b8a6" />
                      <circle cx="15" cy="12" r="1.6" fill="#14b8a6" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="#14b8a6" strokeWidth="1.4" fill="none" />
                      <path d="M2 12h20M12 2c2.5 3 2.5 9 0 14M6 4c3 3 3 9 0 16M18 4c-3 3-3 9 0 16" stroke="#0ea5a1" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'bolt' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M13 2L3 14h7l-1 8L21 10h-7l-0-8z" fill="#14b8a6" />
                    </svg>
                  )}
                  {item.icon === 'palette' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 2a9 9 0 100 18 2.5 2.5 0 01-2.4-3.4A7 7 0 1119 7.4 2.5 2.5 0 0016 5a9 9 0 00-4-3z" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.2" />
                      <circle cx="9" cy="9" r="0.9" fill="#14b8a6" />
                      <circle cx="14" cy="8" r="0.9" fill="#14b8a6" />
                      <circle cx="11" cy="13" r="0.9" fill="#14b8a6" />
                    </svg>
                  )}
                </span>
                <span className="working-category">{item.category}</span>
                <span className="working-tools">{item.tools}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
