import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./ApodCard";

export default function ApodList() {
    const [myApod, setApod] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=v8SBg9QPjd7MsaWGYJzaCMvjvFadwqKmYJ4RJhco`)
            .then(response => {
                setApod(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("the data was not returned", error);
            });
    }, []);

    return (
        <div className="apod-list">
            <ApodCard
                key={myApod.data}
                title={myApod.title}
                explanation={myApod.explanation}
                date={myApod.date}
                url={myApod.hdurl}
            />
        </div>
    )
};
