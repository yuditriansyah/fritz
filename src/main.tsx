import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Prevent flash of unstyled content
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('loaded');
});

// Fallback if DOMContentLoaded already fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('loaded');
  });
} else {
  document.documentElement.classList.add('loaded');
}

createRoot(document.getElementById("root")!).render(<App />);
