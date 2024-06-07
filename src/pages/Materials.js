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
                    imgSource={"./materials-images/lesson2.jpeg"}
                    courseTitle={"該如何選科系？"}
                    pdfFile={"./pdfs/lesson2.pdf"}
                />
                <LessonMaterial
                    imgSource={"./materials-images/lesson4.jpeg"}
                    courseTitle={"聽力教學：天氣這麼冷！"}
                    pdfFile={"./pdfs/lesson4.pdf"}
                />

               
                <LessonMaterial
                    imgSource={"./materials-images/lesson3.jpeg"}
                    courseTitle={"DDL教學設計"}
                    pdfFile={"./pdfs/lesson3.pdf"}
                />
                                <LessonMaterial
                    imgSource={"./materials-images/lesson1.jpeg"}
                    courseTitle={"你週末做什麼？"}
                    pdfFile={"./pdfs/lesson1.pdf"}
                />
            </div>
            <Footer />
            <OnTop />

        </div>
    )
}