import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
      <>
      <Greeting name='Mike' />
      <Greeting name='Mitchell' />
      <Greeting name='Maggie' />
      <Greeting name='Albert' />
      <Greeting name='Tom' />
      <p>
        Wow, JSX is neat ! ! !
      </p>
      </>
  );
}

export default App;
