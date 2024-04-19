import React from 'react'
import "./introduce.css";

export default function Introduce(props) {
    return (
        <div className="container">
            <h3>{props.title}</h3>
            <p>{props.name}</p>
        </div>
    )
}
