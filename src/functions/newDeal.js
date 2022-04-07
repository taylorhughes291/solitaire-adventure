import shuffle from './shuffle'

const newDeal = () => {
    const shuffledDeck = shuffle()
    const piles = []
    const faceUpPiles = []
    for (let i = 0; i < 7; i++) {
        const pile = []
        for (let j = 0; j < i + 1; j++) {
            const drawnCard = shuffledDeck.pop()
            pile.push(drawnCard)
        }
        const faceUpCard = pile.pop()
        faceUpPiles.push([faceUpCard])
        piles.push(pile)
    }

    const hand = {
        piles,
        faceUpPiles,
        draw: shuffledDeck
    }

    console.log(hand)

    return hand
}

export default newDeal