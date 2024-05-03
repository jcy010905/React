import React from 'react';
import "./introduce.css";
import useInput from './useInput';

export default function Name(props) {
    const { value: name, inputValue: changeName, handleChange, handleSubmit: Changebutton } = useInput("정찬용");

    return (
        <div className="container">
            <div className="name">
                <h3>
                    {props.title}: {name}
                    <input
                        type="text"
                        placeholder="Name"
                        value={changeName}
                        onChange={handleChange}
                    />
                    <button onClick={Changebutton}>변경</button>
                </h3>
            </div>
        </div>
    )
}