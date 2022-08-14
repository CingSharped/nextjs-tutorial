import Card from "../components/card";
import SavedDecksDisplay from "../components/savedDecksDisplay";
import Link from "next/link";
import { deck } from "../components/deck";

const sampleCard1 = {
   title: "Card One",
   description: "this is a Yu Gi Oh! card description biatch"
}
const sampleCard2 = {
  title: "Card Two",
  description: "this is a Yu Gi Oh! card description biatch"
}
const sampleCard3 = {
   title: "Card Three",
   description: "this is a Yu Gi Oh! card description biatch"
}
const sampleCard4 = {
   title: "Card Four",
   description: "this is a Yu Gi Oh! card description biatch"
}

const sampleDeck = new Deck("Sample Deck 1", "Chris");
sampleDeck.addToMainDeck(sampleCard1);
sampleDeck.addToMainDeck(sampleCard2);

const sampleDeck1 = {
   name: "Sample DeckDisplay 1",
   mainCards: [
      sampleCard1, sampleCard2, sampleCard3,
   ],
   extraCards: [sampleCard2, sampleCard4],
   sideCards: [sampleCard1, sampleCard4]
}

const sampleDeckCollection = [
   sampleDeck1, sampleDeck2
];

const readthecardboard = () => {
    return (
        <div>
            <section >
            <Card currentCard={sampleCard1}/>
            </section>
            <section>
                <SavedDecksDisplay decks={sampleDeckCollection} />
            </section>
            <Link href="/"><a>Back to home</a></Link>
        </div>
    );
}

export default readthecardboard