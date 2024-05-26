import React from 'react';
import myProfilePic from "../profile-img.png";
import '../styles/Hero.css';
export default function Hero() {
    return (
        <div id="hero">
            <div class="profile-photo-container">
                <div class="profile-photo">
                    <img src={myProfilePic} alt="" />
                </div>
            </div>

            <p className='my-name'>
                嗨！我是方東！
            </p>
            <p className='my-intro'>
                我是一名華語老師，也是一個工程師。我會寫程式，也會教中文！
            </p>
            <a href="/more-about">
                <button className='more-about'>
                    關於我的更多多
                </button>
            </a>

        </div>
    );
}

