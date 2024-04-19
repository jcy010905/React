import React from 'react';
import "./introduce.css";

export default function Age(props) {
    return (
        <div className="container">
            <h3>{props.title}: {props.name}</h3>
        </div>
    )
}
