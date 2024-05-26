import React from 'react';
import '../styles/NavBar.css';
class NavBar extends React.Component {
  handleClick = (e, sectionId) => {
    e.preventDefault();

    // Define your offset here (in pixels)
    const offset = 60;

    // Smooth scroll to the clicked section with offset
    const section = document.querySelector(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - offset,
        behavior: 'smooth'
      });
    }
  };

  render() {
    return (
      <div id='nav-bar'>
        <ul>
          <li><a href="/#hero">About</a></li>
          <li><a href="/#project-section" >Project</a></li><li><a href="/teaching-materials">Teaching Materials</a></li>
          <li><a href="/#contact" >Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
