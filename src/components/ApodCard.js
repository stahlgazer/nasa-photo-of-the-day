import React, { useState } from "react";
import { Button, Badge, Alert, Spinner, Collapse } from 'reactstrap'

const ApodCard = props => {
    // console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="apod-card">
            <h1><Badge color="primary">New</Badge> Astronomy Picture of the Day</h1>

            <a href="https://apod.nasa.gov/apod/archivepix.html"><Button color="info">Discover the cosmos!</Button></a>
            
            <Alert color="info">Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</Alert>

            <p><Spinner color="primary" /> {props.date} <Spinner color="primary" /></p>

            <img src={props.url} alt="daily astronomy pic" width="60%"></img>

            <Alert>{props.title}</Alert>

            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Explanation</Button>
            <Collapse isOpen={isOpen}>{props.explanation} </Collapse>
        </div>
    );
};
export default ApodCard;