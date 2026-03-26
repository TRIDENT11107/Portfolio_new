import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const messages = [
      'Initializing portfolio...',
      'Loading projects...',
      'Compiling skills...',
      'Fetching experience...',
      'Bootstrapping interface...',
      'Ready to explore'
    ];

    let messageIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 30;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    let completionTimeout;
    const messageInterval = setInterval(() => {
      messageIndex++;
      if (messageIndex >= messages.length) {
        clearInterval(messageInterval);
        setProgress(100);
        completionTimeout = setTimeout(() => {
          setIsLoading(false);
          if (typeof onLoadComplete === 'function') {
            onLoadComplete();
          }
        }, 500);
      }
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      if (completionTimeout) {
        clearTimeout(completionTimeout);
      }
    };
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="terminal-lines">
          <div className="terminal-line"><span className="arrow">></span> Initializing portfolio...</div>
          <div className="terminal-line"><span className="arrow">></span> Loading projects...</div>
          <div className="terminal-line"><span className="arrow">></span> Compiling skills...</div>
          <div className="terminal-line"><span className="arrow">></span> Fetching experience...</div>
          <div className="terminal-line"><span className="arrow">></span> Bootstrapping interface...</div>
        </div>

        <div className="progress-section">
          <div className="progress-label">
            <span className="label-text">PORTFOLIO_BOOT</span>
            <span className="percentage">{Math.floor(progress)}%</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
