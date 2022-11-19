import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {RICK_AND_MORTY_CHARACTERS} from "./data/rick_and_morty_characters";
import CharacterGalery from './components/CharacterGalery';

function App() {
  console.log(RICK_AND_MORTY_CHARACTERS[0])
  return (
    <div className="App">

        <Header />
        <CharacterGalery key={1} characters={RICK_AND_MORTY_CHARACTERS}/>
    </div>);
}

export default App;
