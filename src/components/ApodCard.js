import React from "react";

const ApodCard = props => {
    // console.log(props)
    return (
        <div className="apod-card">
            <h1>Astronomy Picture of the Day</h1>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>{props.date}</p>
            <img src={props.url} alt="daily astronomy pic"></img>
            <p>{props.title}</p>
            <p>Explanation: {props.explanation}</p>
        </div>
    );
};
export default ApodCard;