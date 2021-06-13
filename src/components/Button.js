import React from 'react';

function Button(props) {
    return (
        <button
            className={`w-full bg-blue-500 text-white h-11 rounded-xl font-medium focus:outline-none ${props.className}`}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;