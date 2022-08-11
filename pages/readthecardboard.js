import Card from "../components/card";
import SavedDecksDisplay from "../components/savedDecksDisplay";
import Link from "next/link";

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

const sampleDeck1 = {
   name: "Sample Deck 1",
   cards: [
      sampleCard1, sampleCard2, sampleCard3,
   ]
}
const sampleDeck2 = {
   name: "Sample Deck 2",
   cards: [
      sampleCard4, sampleCard3, sampleCard2,
   ]
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