import React, { useState } from 'react';
import "./introduce.css";

export default function Title(props) {
    const [name, setName] = useState(props.name); 
    const [changeName, setChangeName] = useState("");

    const nameChange = (e) => {
        setChangeName(e.target.value);
    };

    const Changebutton = () => {
        setName(changeName);
    };

    return (
        <div className="container">
            <h3>
                {props.title}: {name}
                <input
                    type="text"
                    placeholder= {props.holder}
                    value={changeName}
                    onChange={nameChange}
                />
                <button onClick={Changebutton}>변경</button>
            </h3>
        </div>
    )
}
