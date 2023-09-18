import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

