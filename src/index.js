import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Responsive from './responsive';
import './responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

// ensure responsive vars/classes are set immediately
if (Responsive && typeof Responsive.update === 'function') {
  Responsive.update();
}