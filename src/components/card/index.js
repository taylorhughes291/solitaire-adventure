import cards from "../../data/cardData"
import {useEffect, useState} from "react"

function Card (props) {
    
    ///////////////////////////
    // Constants
    ///////////////////////////

    const [faceUp, setFaceUp] = useState(false)
    
    ///////////////////////////
    // Functions
    ///////////////////////////
    
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
        <div className='card' alt={faceUp ? `${cards[props.value].image} of ${cards[props.value].suit}` : 'face down playing card'}>
            {faceUp && <>
                <div className='card-statement'>
                    <h4>{cards[props.value].image}</h4>
                    <img src={`/${cards[props.value].suit}.png`} alt={cards[props.value].suit} />
                </div>
                <div className='card-statement'>
                    <h4>{cards[props.value].image}</h4>
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