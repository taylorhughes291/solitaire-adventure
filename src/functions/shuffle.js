const shuffle = () => {
    const orderedDeck = [...Array(52).keys()]
    const deck = []
    for (let i = 0; i < 52; i++) {
        const pulledCard = parseInt(orderedDeck.splice(Math.floor(Math.random() * orderedDeck.length), 1).join(''))
        deck.push(pulledCard)
    }
    return deck
}

export default shuffle