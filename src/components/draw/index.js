import {useEffect, useState} from "react"
import Card from "../card"

function Draw (props) {

    ////////////////////
    // Constants
    ////////////////////

    const [drawPileCards, setDrawPileCards] = useState([])
    const [shownCards, setShownCards] = useState([])

    ////////////////////
    // Functions
    ////////////////////

    const drawPile = drawPileCards.map((item, index) => {
        return (
            <div
                style={{marginLeft: index*2}}
            >
                <Card
                    value={item}
                    key={index}
                    faceUp={false}
                />
            </div>
        )
    })

    const draw = () => {
        if (drawPileCards.length === 0) {
            const shownCardsCopy = shownCards.slice()
            setDrawPileCards(shownCardsCopy.reverse())
            setShownCards([])

        } else {
            const drawPileCopy = drawPileCards.slice()
            const drawnCards = shownCards.slice()
            for (let i = 0; i < 3; i++) {
                const drawnCard = drawPileCopy.pop()
                if (typeof drawnCard !== 'undefined') {
                    drawnCards.push(drawnCard)
                }
            }
    
            setDrawPileCards(drawPileCopy)
            setShownCards(drawnCards)
        }
    }

    ////////////////////
    // Render
    ////////////////////

    useEffect(() => {
        if (props.cards.length > 0) {
            setDrawPileCards(props.cards)
        }
    }, [])

    return (
        <div id='draw'>
            <div
                id='draw-cards'
            >
                <div 
                    className='draw-card pile'
                >
                    {shownCards.length > 2 && <>
                        <Card 
                            faceUp={true}
                            value={shownCards[shownCards.length - 3]}
                        />
                    </>}
                </div>
                <div 
                    className='draw-card pile'
                >
                    {shownCards.length > 2 && <>
                        <Card 
                            faceUp={true}
                            value={shownCards[shownCards.length - 2]}
                        />
                    </>}
                </div>
                <div 
                    className='draw-card pile'
                >
                    {shownCards.length > 2 && <>
                        <Card 
                            faceUp={true}
                            value={shownCards[shownCards.length - 1]}
                        />
                    </>}
                </div>
            </div>
            <div
                id='draw-pile'
                className='pile'
                onClick={draw}
            >
                {drawPile}
            </div>
        </div>
    )
}

export default Draw