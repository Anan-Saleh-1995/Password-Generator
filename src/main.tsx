import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.css';
import { PasswordProvider } from '@/context/password';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordProvider>
      <App />
    </PasswordProvider>
  </StrictMode>,
);
