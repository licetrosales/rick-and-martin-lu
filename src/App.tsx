import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {RICK_AND_MORTY_CHARACTERS} from "./data/rick_and_morty_characters";
import CharacterGalery from './components/CharacterGalery';
import ActionBar from './components/ActionBar';


// export = mach die Funktion öffentlich, erlaube Imports
// default = Das ist der Standardexport in dieser Datei

function App() {

    // Normalerweise würden wir diese Daten von einer API live auslesen
    // D.h. wie bei Postman ein GET an (http://rickandmortyapi.com/api) senden
    // Für Übungszwecke importieren wir die daten hier aber lokal

    console.log(RICK_AND_MORTY_CHARACTERS[0])

    const [searchText, setSearchText] = useState("")

    //filter erstellen
    const filteredChracters = RICK_AND_MORTY_CHARACTERS.filter((character) => {
        if (character.name.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }
        //
        return false
    })

    function myFunction(searchText: string) {
        console.log("App")
        console.log(searchText)
        setSearchText(searchText)
    }


    /* Was ist eigentlich die Aufgabe von App.tsx?
    * -> App.tsx ist unsere Oberkomponente in der Struktur
    * -> App.tsx sollte möchligst klein und kompakt bleiben
    (Das ist ein allgemeines React-Konzept).
    * Deshalb legen wir den Code in immer kleinere Stückkchen "nach unten"*/

    // callback functions


    return (
        /* Hier ist eine Einheit von React!
        *  Jede React-Komponente darf maximal EIN HTML Element zurückgeben
        * Deshalb ist die Header Element und die Galerie in einem <> verpackt
        * "<>" ist ein leeres HTML Element (das ist kein "echtes" HTML und gibt es _nur_bei React)*/

        <div className="App">
            {/* Header gehört zu App.tsx */}
            <Header/>

            <ActionBar myCallBackFunction={myFunction}/>

            {/*
        Hier haben wir die Galerie als unsere "Kindkomponente"
        Die Galerie zeigt uns die Charaktere an
        Dafür übergeben wir ihr die Charaktere in einem Props-"Paket"*/}
            <CharacterGalery characters={filteredChracters}/>
        </div>);
}

export default App;
