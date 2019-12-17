import React, { useState } from "react";
import { Button, Badge, Alert, Spinner, Collapse } from 'reactstrap'

const ApodCard = props => {
    // console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="apod-card">
            <h1><Badge color="primary">New</Badge> Astronomy Picture of the Day</h1>
            <Alert color="info">Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</Alert>
            <p><Spinner color="primary" /> {props.date}</p>
            <img src={props.url} alt="daily astronomy pic" width="50%"></img>
            <Alert>Title: {props.title}</Alert>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Explanation</Button>
            <Collapse isOpen={isOpen}>{props.explanation}</Collapse>
            <p><a href="https://apod.nasa.gov/apod/archivepix.html"><Button color="info">Discover other Pictures of the Day!</Button></a></p>
        </div>
    );
};
export default ApodCard;