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
                            style={{marginTop: ((index * 6) + (props.faceDownPile.length * 6))}}
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
        const faceUpPileCopy = props.faceUpPile.slice()
        faceUpPileCopy.push(draggedCard.draggedCard.value)
        let faceUpPilesCopy = props.faceUpPiles.slice()
        faceUpPilesCopy[props.pile] = faceUpPileCopy
        
        if (draggedCard.draggedCard.location <= 6) {
            const index = faceUpPilesCopy[draggedCard.draggedCard.location].indexOf(draggedCard.draggedCard.value)
            faceUpPilesCopy[draggedCard.draggedCard.location].splice(index, 1)
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
        } else {

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