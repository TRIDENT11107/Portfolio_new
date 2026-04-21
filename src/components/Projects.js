import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 4,
      title: "Term Sheet AI",
      description: "NLP-powered financial document analysis system extracting and structuring information from term sheets with inconsistency detection.",
      brief: "Built a comprehensive NLP-powered system using OCR to extract and structure information from financial term sheets. Implemented logic to detect inconsistencies and potential risk indicators while improving interpretability of outputs to support faster human review.",
      technologies: ["Python", "AI/ML", "NLP", "OCR", "Legal Tech"],
      image: "/term_sheet-ai.jpg",
      category: "AI/ML",
      link: "https://term-sheet-ai.vercel.app/",
      github: "https://github.com/TRIDENT11107/TermSheet-AI",
      features: [
        "OCR-based document extraction",
        "Inconsistency detection",
        "Risk indicator identification",
        "Interpretable outputs for human review"
      ]
    },
    {
      id: 1,
      title: "MediTrust AI",
      description: "Automated PII detection and redaction for healthcare data — enables privacy-aware analytics on regulated datasets with HIPAA compliance.",
      brief: "Developed automated pipelines to identify and redact sensitive personal information from unstructured healthcare data. Designed privacy-aware workflows enabling secure analytics on regulated datasets with full compliance and production-ready deployment.",
      technologies: ["Python", "NLP", "OCR", "Computer Vision", "Data Privacy"],
      image: "/meditrust_img.jpg",
      category: "AI/ML",
      link: "#",
      github: "#",
      features: [
        "Automated PII identification and redaction",
        "Privacy-aware data workflows",
        "HIPAA-compliant processing",
        "Secure analytics on regulated data"
      ]
    },
    {
      id: 5,
      title: "Real-Time Fake News Detection System",
      description: "NLP pipeline for classifying streaming text data based on credibility with optimized accuracy-latency-false positive balance.",
      brief: "Created real-time NLP pipelines to classify streaming text data based on credibility. Tuned model thresholds to balance accuracy, latency, and false positives for deployment in production environments with high-volume data streams.",
      technologies: ["Python", "NLP", "Machine Learning", "Real-Time Processing", "Data Streaming"],
      image: "/fake%20news.png",
      category: "AI/ML",
      link: "#",
      github: "#",
      features: [
        "Real-time text classification",
        "Credibility scoring",
        "Optimized model thresholds",
        "Streaming data pipeline support"
      ]
    },
    {
      id: 6,
      title: "Synthetic Data Generator",
      description: "CTGAN-based synthetic data generation system for experimentation on sensitive datasets with statistical similarity validation.",
      brief: "Built synthetic data generation pipelines using CTGAN for safe experimentation on sensitive datasets. Evaluated generated data using statistical similarity metrics for downstream ML usability, enabling secure model development and testing.",
      technologies: ["Python", "AI/ML", "CTGAN", "Data Synthesis", "Statistical Analysis"],
      image: "/synthetic-data-generator.png",
      category: "AI/ML",
      link: "#",
      github: "#",
      features: [
        "CTGAN synthetic data generation",
        "Statistical similarity metrics",
        "Downstream ML usability validation",
        "Privacy-preserving experimentation"
      ]
    },
    {
      id: 7,
      title: "AI-Powered Adaptive Web Interface",
      description: "Multimodal AI system using behavioral, speech, and visual inputs for real-time cognitive load detection and adaptive UI elements.",
      brief: "Developed a multimodal AI system using behavioral, speech, and visual inputs for real-time cognitive load detection. Designed an adaptive UI that dynamically modifies interface elements to improve accessibility and reduce workload. Integrated ML models with React and FastAPI backend for real-time personalized user experience.",
      technologies: ["React", "FastAPI", "Python", "Machine Learning", "Computer Vision", "Speech Recognition"],
      image: "/zenith-dashboard.png",
      category: "AI/ML",
      link: "#",
      github: "#",
      features: [
        "Multimodal input processing",
        "Real-time cognitive load detection",
        "Adaptive UI modulation",
        "Improved accessibility and workload balance"
      ]
    },

  ];

  const categories = ['All', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: "95%", label: "Efficiency Improvement", subtitle: "Term Sheet AI Impact" },
    { number: "<1s", label: "Image Search Speed", subtitle: "ProcMart Innovation" },
    { number: "6+", label: "Projects Built", subtitle: "Real-world Applications" },
    { number: "15+", label: "Technologies Used", subtitle: "Diverse Tech Stack" }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications showcasing AI/ML innovation, full-stack development, and 
          creative problem-solving across different domains.
        </p>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.alt === 'Term Sheet AI') {
                      if (img.src.includes('term_sheet-ai.jpg')) {
                        img.src = '/term_sheet_ai_results.png';
                        return;
                      }
                      if (img.src.includes('term_sheet_ai_results.png')) {
                        img.src = '/term_sheet_ai.png';
                        return;
                      }
                    }
                    img.onerror = null;
                    img.src = 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="project-category-badge">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="project-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtitle">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            
            <a 
              href={selectedProject.github} 
              className="modal-github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            <div className="modal-header">
              <div className="modal-header-line"></div>
              <span className="modal-header-text">PROJECT OVERVIEW</span>
            </div>

            <h1 className="modal-title">{selectedProject.title}</h1>

            <div className="modal-content">
              <div className="modal-left">
                <div className="modal-section">
                  <h3 className="modal-section-title">01 // BRIEF</h3>
                  <p className="modal-section-content">{selectedProject.brief}</p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">02 // KEY FEATURES</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-right">
                <div className="modal-tech-stack">
                  <h3 className="modal-tech-title">– SYSTEM_STACK</h3>
                  <div className="modal-tech-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="modal-tech-item">{tech}</div>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.github} className="modal-btn modal-btn-primary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  <a href={selectedProject.link} className="modal-btn modal-btn-secondary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 
