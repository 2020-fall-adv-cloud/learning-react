import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {

  const tomsFavoriteColors = [
    'Blue'
    , 'Gray'
  ];

  return (
      <>
      <Greeting name='Mike' favoriteNumber={ 12 } twoFavoriteColors={ ['Blue', 'Green'] } />
      <Greeting name='Mitchell' favoriteNumber={ 7 } twoFavoriteColors={ ['Green', 'Blue'] } />
      <Greeting name='Maggie' favoriteNumber={ 9 } twoFavoriteColors={ ['Red', 'Green'] } />
      <Greeting name='Albert' favoriteNumber={ 22 } twoFavoriteColors={ ['Purple', 'Orange'] } />
      <Greeting name='Tom' favoriteNumber={ 3 } twoFavoriteColors={ tomsFavoriteColors } />
      <p>
        Wow, JSX is neat ! ! !
      </p>
      </>
  );
}

export default App;
