import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

// Performance: Create root once and reuse
const container = document.getElementById("root");
if (!container) throw new Error('Root element not found');

const root = createRoot(container);

// Render with StrictMode for better development experience
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Performance monitoring (optional)
if (typeof window !== 'undefined' && 'performance' in window) {
  window.addEventListener('load', () => {
    // Log performance metrics for debugging
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
  });
}
