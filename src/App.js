import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
      <>
      <Greeting name='Mike' favoriteNumber='12' />
      <Greeting name='Mitchell' favoriteNumber='7' />
      <Greeting name='Maggie' favoriteNumber='9' />
      <Greeting name='Albert' favoriteNumber='22' />
      <Greeting name='Tom' favoriteNumber='3' />
      <p>
        Wow, JSX is neat ! ! !
      </p>
      </>
  );
}

export default App;
