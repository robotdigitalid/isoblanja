import React from 'react';

function Input(props) {
    return (
        <input
            type={props.type || "text"}
            name={props.name}
            id={props.name}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            className={`h-12 p-3 w-full rounded-lg text-base placeholder-gray-300 border-gray-300 focus:outline-none text-gray-500 ${props.className}`}
        />
    );
}

export default Input;