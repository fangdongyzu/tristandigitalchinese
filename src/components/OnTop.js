import React from 'react'
import { Link } from 'react-router-dom';

function OnTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    window.onscroll = function () { scrollFunction() };
    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }
    return (
        <div>
            <button onClick={scrollToTop} id="backToTopBtn" title="Go to top">Top
                <Link to="/" className='link'></Link>
            </button>
        </div>
    )
}

export default OnTop