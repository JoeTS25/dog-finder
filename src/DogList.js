import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div className="dogsPage">
            <h2>Click on the Dogs for More Info!</h2>
            <div className="dogsList">
                {dogs.map(d => (
                    <div className="indiv" key={d.name}> 
                        <img src={`/${d.src}.jpg`} alt={d.name} />
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default DogList;
