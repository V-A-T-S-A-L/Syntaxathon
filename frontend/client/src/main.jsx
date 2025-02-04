<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18n from './i18n'; // Import i18n configuration
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap your App with I18nextProvider */}
      <App />
    </I18nextProvider>
  </StrictMode>,
);
>>>>>>> f00b114 (final by joshua)
