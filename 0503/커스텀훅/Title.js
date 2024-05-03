import React from 'react';
import "./introduce.css";
import useInput from './useInput';

export default function Title(props) {
    const { value: name, inputValue: changeName, handleChange, handleSubmit: Changebutton } = useInput(props.name);

    return (
        <div className="container">
            <h3>
                {props.title}: {name}
                <input
                    type="text"
                    placeholder={props.holder}
                    value={changeName}
                    onChange={handleChange}
                />
                <button onClick={Changebutton}>변경</button>
            </h3>
        </div>
    )
}