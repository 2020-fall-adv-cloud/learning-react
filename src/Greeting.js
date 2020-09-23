import React from 'react';

// Functional React component... Guess what, it is a function ! ! !
const Greeting = ({name, favoriteNumber, twoFavoriteColors }) => {

    //console.log(props);

    return (
        <>
        <h1>
            Hello { name } ! ! !
        </h1>
        <p>
            { name }'s favorite number is { favoriteNumber }.
        </p>
        <p>
            { name }'s favorite number plus ten is { favoriteNumber + 10 }.
        </p>
        <p>
            { name }'s two favorite colors are { twoFavoriteColors.join(', ') }.
        </p>
        </>
    );
}

export default Greeting;