import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header/index.tsx';
import Hero from './components/Hero/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
)
