import React from 'react';
import "./introduce.css";

export default function Information(props) {
    return (
        <div className="container2">
            <div>Email: {props.email}</div>
            <div>PhoneNumber: {props.number}</div>
        </div>
    );
}