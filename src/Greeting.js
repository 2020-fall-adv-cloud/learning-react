import React from 'react';

// Functional React component... Guess what, it is a function ! ! !
const Greeting = (props) => {
    return (
        <h1>
            Hello { props.name } ! ! !
        </h1>
    );
}

export default Greeting;