import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Replace with your deployed Google Apps Script Web App URL (or paste into the UI below while testing)
  // Steps to get this URL are in infra/google_apps_script/README.md
  const GOOGLE_SHEETS_ENDPOINT = 'REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL';

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to Google Sheets via Apps Script web app
    // Allow runtime override via a data attribute on the form (so you can paste the web-app URL in the DOM for testing)
    const formElement = document.querySelector('.contact-form');
    const runtimeEndpoint = formElement && formElement.dataset.gsEndpoint ? formElement.dataset.gsEndpoint : null;
    const endpointToUse = runtimeEndpoint || GOOGLE_SHEETS_ENDPOINT;

    if (!endpointToUse || endpointToUse.includes('REPLACE_WITH')) {
      // Local fallback — just log and reset
      console.warn('Google Sheets endpoint not configured. Update GOOGLE_SHEETS_ENDPOINT in Contact.js or paste the web-app URL into the form data-gs-endpoint attribute');
      setSubmitResult({ ok: false, message: 'Submission endpoint not configured.' });
      return;
    }

    setSubmitting(true);
    setSubmitResult(null);

  fetch(endpointToUse, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === 'success') {
          setSubmitResult({ ok: true, message: 'Message sent — thank you!' });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitResult({ ok: false, message: data && data.message ? data.message : 'Failed to send message' });
        }
      })
      .catch((err) => {
        console.error(err);
        setSubmitResult({ ok: false, message: 'Network or server error' });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Build Something Amazing</h2>
        <p className="section-subtitle">
          Ready to collaborate on innovative AI/ML projects or full-stack applications?
          I'm always excited to discuss new opportunities and technical challenges!
        </p>
        
        <div className="contact-content">
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send Message</h3>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitResult && (
                <div className={`submit-result ${submitResult.ok ? 'ok' : 'error'}`} role="status" style={{ marginTop: '1rem' }}>
                  {submitResult.message}
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-info">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Get In Touch</h3>
              <p className="contact-info-description">
                I'm currently a final year B.Tech student actively seeking opportunities in 
                AI/ML and full-stack development. Whether you have an exciting project, internship, 
                or full-time opportunity, I'd love to hear from you!
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:rastogisarthak84@gmail.com" className="contact-link">rastogisarthak84@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <a href="tel:+919311206668" className="contact-link">+91 93112 06668</a>
              </div>
              
              <div className="contact-item">
                <h4>Location</h4>
                <span className="contact-text">Chennai, India</span>
              </div>
              
              <div className="contact-item">
                <h4>Connect With Me</h4>
                <div className="social-links">
                  <a href="https://github.com/TRIDENT11107" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true" focusable="false">
                      <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.016-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.005-.404c1.02.005 2.045.138 3.004.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.476 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </a>

                  <a href="https://www.linkedin.com/in/sarthak-rastogi-951811290/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true" focusable="false">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM7.5 8h4.8v2.2h.1c.67-1.27 2.3-2.6 4.73-2.6 3.18 0 5.87 2.6 5.87 7.33V24h-5V15.5c0-2.0-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="availability-section">
              <h4 className="availability-title">🚀 Currently Available</h4>
              <p className="availability-text">Open to full-time opportunities, internships, and freelance projects in:</p>
              <ul className="availability-list">
                <li>• AI/ML Engineering</li>
                <li>• Full-Stack Development</li>
                <li>• Data Science Projects</li>
                <li>• Creative Tech Solutions</li>
              </ul>
              <a href="mailto:rastogisarthak84@gmail.com" className="btn btn-secondary">Start a Conversation</a>
            </div>

            <div className="contact-image">
              <img 
                src="https://customer-assets.emergentagent.com/job_design-portfolio-91/artifacts/s69krvln_portfolio_img.jpg" 
                alt="Sarthak" 
                className="contact-profile-image"
              />
              <p className="contact-image-caption">Ready to create impact through technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 