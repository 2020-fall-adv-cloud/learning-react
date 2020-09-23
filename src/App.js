import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import StudentList from './StudentList';

const App = () => {

  const tomsFavoriteColors = [
    'Blue'
    , 'Gray'
  ];

  const students = [
    {
      name: 'Mike'
      , shoeSize: 9.5
    }
    , {
      name: 'Albert'
      , shoeSize: 10
    }
    , {
      name: 'Maggie'
      , shoeSize: 8.5
    }
    , {
      name: 'Mitchell'
      , shoeSize: 9
    }
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

      <StudentList students={ students } />
      </>
  );
}

export default App;
