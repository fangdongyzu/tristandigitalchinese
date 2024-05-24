
import React from 'react';
export default function SubClassProject(props){
    return(
        <div className="project">
            <a href={props.toolLink}>
            <img className="tool-screenshot" src={require(`../screenshots/${props.screenshotPath}`)} alt="Project Screenshot" />

            </a>
            <p className="tool-name">{props.toolName}</p>
            <p className="tool-discription">{props.toolDescription}</p>
        </div>
    )
}
