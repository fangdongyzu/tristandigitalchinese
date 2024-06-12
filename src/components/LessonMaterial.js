import React, { useState } from 'react';
import '../styles/LessonMaterial.css';

const LessonMaterial = (props) => {
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
        setShowIframe(!showIframe);
    };

    return (
        <div>
            <div
                className="lesson-material-container"
                onClick={toggleIframe}
            >
                <div className="image-container">
                    <img
                        src={props.imgSource}
                        alt="Lesson Material"
                    />
                </div>
                <p className='empty'> </p>
                <h4 className="course-title">{props.courseTitle}</h4>
            </div>
            {showIframe && (
                <div className="iframe-container">
                    <button className="close-button" onClick={toggleIframe}>
                        Close
                    </button>
                    <iframe src={props.pdfFile}></iframe>
                </div>
            )}
            <br></br>
        </div>
    );
};

export default LessonMaterial;
