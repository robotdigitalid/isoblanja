import React from 'react';

function Image(props) {
    return (
        <div className={props.className}>
            <img src={props.src} className="w-full h-full" />
        </div>
    );
}

export default Image;