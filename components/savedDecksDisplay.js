import { useState } from "react";

export default function SavedDecksDisplay({decks}) {
    const [selectedDeck, setSelectedDeck] = useState();

    function handleClick(deck) {
        setSelectedDeck(deck);
        console.log(selectedDeck.name);
    }

    return (
        <div className="deckStyling">
            {decks.map((deck, index) => (
                <div>
                <button key={index} onClick={(deck) => handleClick(deck)}>{deck.name}</button>
                </div>
            ))}
        </div>
    );
}