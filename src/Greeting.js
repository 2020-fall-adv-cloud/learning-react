import React from 'react';

// Functional React component... Guess what, it is a function ! ! !
const Greeting = ({name, favoriteNumber}) => {

    //console.log(props);

    return (
        <>
        <h1>
            Hello { name } ! ! !
        </h1>
        <p>
            { name }'s favorite number is { favoriteNumber }
        </p>
        </>
    );
}

export default Greeting;