import React from 'react';
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className="contact-links">
      <h4>若您對我感興趣，歡迎與我聯繫，謝謝！</h4>
      <ul>
        <li>
         <a href="mailto:fangdongyzu@gmail.com"><i className="fas fa-envelope"></i> Email</a> 
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fang-dong-li-b10a19217/e"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/fangdongyzu"><i className="fab fa-github"></i> GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
