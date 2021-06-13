import React from 'react';
import {Link} from "react-router-dom";

function Image(props) {
    return (
        <Link to={props.to || '/'} className={props.className}>
            <img
                src={props.src}
                alt={props.alt || 'image isoblanja'}
                className={`w-full h-full ${
                    props.className?.split(' ')
                        .find(i => i.startsWith('rounded'))
                }`}
            />
        </Link>
    );
}

export default Image;