import {DraggedCard} from "../../App.js"
import {useContext} from "react"
import cards from "../../data/cardData"
import Card from "../card"

function Foundation (props) {

    ////////////////////
    // Constants
    ////////////////////

    const draggedCard = useContext(DraggedCard)

    ////////////////////
    // Functions
    ////////////////////

    const foundationUpdate = (card, suit) => {
        console.log(draggedCard.draggedCard)
        const foundationCopy = {
            ...props.foundation
        }
        foundationCopy[suit].push(card)
        props.setFoundation(foundationCopy)

        const shownCardsCopy = props.shownCards.slice()
        const index = shownCardsCopy.indexOf(card)
        shownCardsCopy.splice(index, 1)
        props.setShownCards(shownCardsCopy)
    }

    const handleDrop = (suit) => {
        console.log('attempting drop')
        if (suit === cards[draggedCard.draggedCard.value].suit) {
            console.log(props.foundation)
            if (props.foundation[suit].length === 0) {
                if (cards[draggedCard.draggedCard.value].value === 1) {
                    foundationUpdate(draggedCard.draggedCard.value, suit)
                }
            } else {
                const topFoundation = props.foundation[suit].slice(-1)[0]
                if (cards[topFoundation].value === cards[draggedCard.draggedCard.value].value - 1) {
                    foundationUpdate(draggedCard.draggedCard.value, suit)
                }
            }
        } else {
            console.log(false)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const foundationPile = (suit) => {
        return props.foundation[suit].map((item,index) => {
            return (
                <Card 
                    value={item}
                    key={index}
                    faceUp={true}
                    draggable={true}
                />
            )
        })
    }

    ////////////////////
    // Render
    ////////////////////

    return (
        <div id='foundation'>
            <div 
                id='hearts-pile'
                className='foundation-pile pile'
                onDrop={() => handleDrop('hearts')}
                onDragOver={handleDragOver}
            >
                <img src='/hearts.png' alt='hearts foundation pile' />
                {foundationPile('hearts')}
            </div>
            <div 
                id='spades-pile'
                className='foundation-pile pile'
                onDrop={() => handleDrop('spades')}
                onDragOver={handleDragOver}
            >
                <img src='/spades.png' alt='spades foundation pile' />
                {foundationPile('spades')}
            </div>
            <div 
                id='clubs-pile'
                className='foundation-pile pile'
                onDrop={() => handleDrop('clubs')}
                onDragOver={handleDragOver}
            >
                <img src='/clubs.png' alt='clubs foundation pile' />
                {foundationPile('clubs')}
            </div>
            <div 
                id='diamonds-pile'
                className='foundation-pile pile'
                onDrop={() => handleDrop('diamonds')}
                onDragOver={handleDragOver}
            >
                <img src='/diamonds.png' alt='diamonds foundation pile' />
                {foundationPile('diamonds')}
            </div>
        </div>
    )
}

export default Foundation