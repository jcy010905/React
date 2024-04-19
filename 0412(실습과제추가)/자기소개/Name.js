import React, { useState } from 'react';
import "./introduce.css";

export default function Name(props) {
    const [name, setName] = useState("정찬용"); 
    const [changeName, setChangeName] = useState("");
    
    const nameChange = (e) => {
        setChangeName(e.target.value);
    };

    const Changebutton = () => {
        setName(changeName);
    };

    return (
        <div className="container">
            <div className="name">
                <h3>
                    {props.title}: {name}
                    <input
                        type="text"
                        placeholder="Name"
                        value={changeName}
                        onChange={nameChange}
                    />
                    <button onClick={Changebutton}>변경</button>
                </h3>
            </div>
        </div>
    )
}