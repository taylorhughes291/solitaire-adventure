import Card from "../card"
import {DraggedCard} from "../../App.js"
import {useContext} from "react"
import cards from "../../data/cardData"

function Stack (props) {

    /////////////////
    // Constants
    /////////////////

    const draggedCard = useContext(DraggedCard)

    /////////////////
    // Functions
    /////////////////

    const faceDownCards = () => {
        if (props.faceDownPile) {
            return (
                props.faceDownPile.map((item, index) => {
                    return (
                        <div
                            style={{marginTop: index*6}}
                            key={index}
                        >
                            <Card 
                                value={item}
                                faceUp={false}
                                draggable={false}
                                location={props.pile}
                            />
                        </div>
                    )
                })
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const faceUpCards = () => {
        if (props.faceUpPile) {
            return (
                props.faceUpPile.map((item, index) => {
                    return (
                        <div
                            style={{marginTop: ((index * 25) + (props.faceDownPile.length * 6))}}
                            key={index}
                        >
                            <Card 
                                value={item}
                                faceUp={true}
                                draggable={true}
                                location={props.pile}
                            />
                        </div>
                    )
                })
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleSuccess = () => {
        let faceUpPileCopy = props.faceUpPile.slice()
        let faceUpPilesCopy = props.faceUpPiles.slice()
        
        if (draggedCard.draggedCard.location <= 6) {
            const index = faceUpPilesCopy[draggedCard.draggedCard.location].indexOf(draggedCard.draggedCard.value)
            const endOfArray = faceUpPilesCopy[draggedCard.draggedCard.location].splice(index)
            faceUpPileCopy = faceUpPileCopy.concat(endOfArray)
            faceUpPilesCopy[props.pile] = faceUpPileCopy
        } else if (draggedCard.draggedCard.location === 7) {
            const shownCardsCopy = props.shownCards.slice()
            const index = shownCardsCopy.indexOf(draggedCard.draggedCard.value)
            const movingCard = shownCardsCopy.splice(index, 1)
            props.setShownCards(shownCardsCopy)
            faceUpPileCopy.push(movingCard)
            faceUpPilesCopy[props.pile] = faceUpPileCopy
        } else if (draggedCard.draggedCard.location > 7) {
            let newPiles = {
                ...props.foundation
            }
            let newPile = []
            let movedCard = -1
            switch (draggedCard.draggedCard.location) {
                case 8:
                    newPile = newPiles['hearts'].slice()
                    movedCard = newPile.splice(-1, 1)
                    newPiles['hearts'] = newPile
                    break;
                case 9:
                    newPile = newPiles['spades'].slice()
                    movedCard = newPile.splice(-1, 1)
                    newPiles['spades'] = newPile
                    break;
                case 10:
                    newPile = newPiles['clubs'].slice()
                    movedCard = newPile.splice(-1, 1)
                    newPiles['clubs'] = newPile
                    break;
                default:
                    newPile = newPiles['diamonds'].slice()
                    movedCard = newPile.splice(-1, 1)
                    newPiles['diamonds'] = newPile
                    break;
            }
            props.setFoundation(newPiles)
            faceUpPileCopy.push(movedCard)
            faceUpPilesCopy[props.pile] = faceUpPileCopy
        }
        
        props.setFaceUpPiles(faceUpPilesCopy)

    }

    const handleDrop = () => {
        if (props.faceUpPile.length > 0) {
            const topCard = props.faceUpPile.slice(-1)[0]
            if (cards[topCard].color !== cards[draggedCard.draggedCard.value].color) {
                if (cards[topCard].value === cards[draggedCard.draggedCard.value].value + 1) {
                    handleSuccess()
                }
            }
        } else if (cards[draggedCard.draggedCard.value].value === 13) {
            handleSuccess()
        }
    }


    /////////////////
    // Render
    /////////////////

    return (
        <div 
            id='stack'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className='pile'>
                {faceDownCards()}
                {faceUpCards()}
            </div>
        </div>
    )
}

export default Stack