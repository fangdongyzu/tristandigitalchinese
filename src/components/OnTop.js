import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/OnTop.css';

function OnTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const scrollFunction = () => {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    };

    window.onscroll = function () { scrollFunction() };

    return (
        <div>
            <button onClick={scrollToTop} id="backToTopBtn" title="Go to top">Back to Top
                <Link to="/" className='link'></Link>
            </button>
        </div>
    )
}

export default OnTop;
