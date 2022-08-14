class Deck{

    mainDeck = [];
    sideDeck = [];
    extraDeck = [];

	constructor(deckName,deckCreator){
    	this.deckName=deckName;
      	this.deckCreator=deckCreator;
    }
    addToMainDeck(newCard){
        this.mainDeck.push(newCard);
    }
    addToSideDeck(newCard){
        this.sideDeck.push(newCard);
    }
    addToExtraDeck(newCard){
        this.extraDeck.push(newCard);
    }
  	countMainDeck(){
    	return this.mainDeck.length;
    }
    countSideDeck(){
    	return this.sideDeck.length;
    }
    countExtraDeck(){
    	return this.extraDeck.length;
    }
}