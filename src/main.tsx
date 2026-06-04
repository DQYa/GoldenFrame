import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const staticTemplatePaths = ['/graduation', '/youthbook', '/wedding', '/baby'];

if (staticTemplatePaths.includes(window.location.pathname) && !window.location.hash) {
  window.history.replaceState(null, '', `/#${window.location.pathname}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
