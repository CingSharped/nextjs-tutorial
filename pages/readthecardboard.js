import Card from "../components/card";
import Deck from "../components/deck";
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

 const sampleDeck = [
    sampleCard1, sampleCard2, sampleCard3, sampleCard4
 ];

const readthecardboard = () => {
    return (
        <div>
            <section >
            <h3>Above the card</h3>
            <Card currentCard={sampleCard1}/>
            <h3>Below the card</h3>
            </section>
            <section>
                <Deck currentDeck={sampleDeck}/>
            </section>
            <Link href="/"><a>Back to home</a></Link>
        </div>
    );
}

export default readthecardboard