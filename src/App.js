import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ClassProjects from './components/ClassProjects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import OnTop from './components/OnTop';

export default function App() {
  return (
    <div className='body-area'>
      <NavBar />

      <section id='hero'>
        <Hero />
      </section>

      <section id="project-section">
        <h3 className='section-title'>數位工具</h3>
        <div className="class-project-container">
          <ClassProjects />
        </div>
      </section>

      <section id="contact">
        <h3 className="section-title">聯繫我</h3>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
