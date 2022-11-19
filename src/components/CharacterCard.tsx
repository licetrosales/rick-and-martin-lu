import {Character} from "../model/Character"

type CharacterCardProps = {
    character : Character
}

import "./CharacterCard.css"

// Jede Komponente die Props benutzt, braucht eine Typendefinition der Props
//Die Struktur ist immer <Komponentename>Props
//Also CharacterCard + Props = CharacterCardProps

export default function CharacterCard({character}: CharacterCardProps){

    return (
        <div className={"character-card"}>
            <h3>{character.name}</h3>
            <img src={character.image}/>
            <p>{character.origin.name}</p>
        </div>
    )

}