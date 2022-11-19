import {Character} from "../model/Character"
import "./CharacterCard"
import CharacterCard from "./CharacterCard"

//Wichtig! CSS importieren damit man es sieht ;)
import "./CharacterGallery.css"

// Jede Komponente die Props benutzt, braucht eine Typedefinition der Props
// Die Struktur ist immer <Komponentenname> + Props
//Oder
// BakeryComponent + Props = BakeryComponentProps


type CharacterGalleryProps = {
    characters: Character[]
}
export default function CharacterGalery({characters}: CharacterGalleryProps) {
    const characterComponents = characters.map((character) => {
        return (
// Wir verpacken die CharacterCardComponent in einem <div> mit der Klasse .card
            //className = Git dem HTML Element die Klasse "card"

            <div className={"card"}>
                {/* key ist ein besonderes Prop!
            Wir brauchen es camit jedes Element in einer Liste eine _eindeutige_ ID hat*/}
                <CharacterCard key={character.id}
                               character={character}/>
            </div>
        )
    })

    return (
        <div>
            <h2>Rick and Morty Character Gallery</h2>

            <div className={"cards"}>
                {/* Hier fügen wir die ganze Liste von Komponenten auf einmal ein */}
                {characterComponents}
            </div>
        </div>
    )
}