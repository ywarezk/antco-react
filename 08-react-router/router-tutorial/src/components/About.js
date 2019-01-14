import React from 'react';

// i will see this in the url /about
export default function About(props) {
    return (
        <h1>
            Hello im in the aboutpage {props.match.params.message}
        </h1>
    )
}