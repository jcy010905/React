import React from 'react';
import "./introduce.css";

export default function Name(props) {
    return (
        <div className="container">
            <div className="name">
                <h3>{props.title}: {props.name}</h3>
            </div>
        </div>
    )
}