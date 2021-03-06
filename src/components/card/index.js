import cards from "../../data/cardData"
import {useEffect, useState, useContext} from "react"
import {DraggedCard} from "../../App.js"

function Card (props) {
    
    ///////////////////////////
    // Constants
    ///////////////////////////

    const [faceUp, setFaceUp] = useState(false)
    const draggedCard = useContext(DraggedCard)
    
    ///////////////////////////
    // Functions
    ///////////////////////////

    const preventDragHandler = (e) => {
        e.preventDefault();
      }

    const handleDragStart = () => {
        draggedCard.setDraggedCard({
            value: props.value,
            location: props.location
        })
    }

    const handleDragEnd = () => {
        draggedCard.setDraggedCard({
            value: -1,
            location: -1
        })
    }
    
    ///////////////////////////
    // Render
    ///////////////////////////

    useEffect(() => {
        if (props.faceUp) {
            setFaceUp(true)
        } else {
            setFaceUp(false)
        }
    }, [props.faceUp])

    return (
        <div 
            className='card' 
            draggable={props.draggable}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            alt={faceUp ? `${cards[props.value].image} of ${cards[props.value].suit}` : 'face down playing card'}
        >
            {faceUp && <>
                <div className='card-statement'>
                    <h4
                        className={`${cards[props.value].color}`}
                    >{cards[props.value].image}</h4>
                    <img src={`/${cards[props.value].suit}.png`} alt={cards[props.value].suit} />
                </div>
                <div className='card-statement'>
                    <h4
                        className={`${cards[props.value].color}`}
                    >{cards[props.value].image}</h4>
                    <img src={`/${cards[props.value].suit}.png`} alt={cards[props.value].suit} />
                </div>
            </>}
            {!faceUp && <>
                <div id='card-back'>

                </div>
            </>}
        </div>
    )
}

export default Card