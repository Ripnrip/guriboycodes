import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Hackathons from './components/Hackathons.jsx';
import Leadership from './components/Leadership.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Hero />
      <About />
      <Projects />
      <Hackathons />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
