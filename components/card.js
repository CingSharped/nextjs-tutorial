export default function Card({currentCard}) {
    return (
        <div className="cardStyling">
            <h1>Yu Gi Oh!</h1>
            <h1>{currentCard ? currentCard.title : "No Title"}</h1>
            <p>{currentCard ? currentCard.description : "No Description"}</p>
        </div>
    );
}