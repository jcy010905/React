import { useState } from 'react';

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setValue(inputValue);
        setInputValue('');
    };

    return {
        value,
        inputValue,
        handleChange,
        handleSubmit,
    };
}