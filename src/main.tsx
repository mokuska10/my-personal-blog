import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Header from './components/Header/index.tsx';
// import Hero from './components/Hero/index.tsx';
// import ReadingMotivation from './components/my-reading-motivation';
import MyThoughtsPage from './components/my-thoughts-page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <Hero /> */}
    {/* <ReadingMotivation /> */}
    <MyThoughtsPage />
  </StrictMode>,
)
