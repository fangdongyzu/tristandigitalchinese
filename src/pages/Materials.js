import React from 'react';
import '../styles/Materials.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import LessonMaterial from '../components/LessonMaterial';
import OnTop from '../components/OnTop';
export default function Materials() {
    return (
        <div className='teaching-materials-wrap'>
            <NavBar />
            <div className='body'>
                <h3>教材</h3>
                <LessonMaterial
                    imgSource={"./materials-images/你週末做什麼.jpeg"}
                    courseTitle={"你週末做什麼？"}
                    pdfFile={"./pdfs/teaching322.pdf"}
                />
                <LessonMaterial
                    imgSource={"./materials-images/你週末做什麼.jpeg"}
                    courseTitle={"你週末做什麼？"}
                    pdfFile={"./pdfs/teaching322.pdf"}
                />
                <LessonMaterial
                    imgSource={"./materials-images/你週末做什麼.jpeg"}
                    courseTitle={"你週末做什麼？"}
                    pdfFile={"./pdfs/teaching322.pdf"}
                />
                <LessonMaterial
                    imgSource={"./materials-images/你週末做什麼.jpeg"}
                    courseTitle={"你週末做什麼？"}
                    pdfFile={"./pdfs/teaching322.pdf"}
                />
            </div>
            <Footer />
            <OnTop />

        </div>
    )
}