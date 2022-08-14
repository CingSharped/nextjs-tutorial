export default function DeckDisplay({currentDeck}) {

    return (
        <div>
            {currentDeck.map((card) => {
                return (
                    <div className="deckStyling">
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                );
            }
            )}
        </div>
    );
}