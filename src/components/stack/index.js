import Card from "../card"

function Stack (props) {

    /////////////////
    // Constants
    /////////////////

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

    /////////////////
    // Render
    /////////////////

    return (
        <div id='stack'>
            <div className='pile'>
                {faceDownCards()}
                {faceUpCards()}
            </div>
        </div>
    )
}

export default Stack