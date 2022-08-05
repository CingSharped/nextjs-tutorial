export default function Deck({currentDeck}) {
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