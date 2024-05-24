import React from 'react';
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className="contact-links">
      <h4>若您對我感興趣，歡迎與我聯繫，謝謝！</h4>
      <ul>
        <li>
         <a href="mailto:your.email@example.com"><i className="fas fa-envelope"></i> Email</a> 
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/your-username"><i className="fab fa-github"></i> GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
