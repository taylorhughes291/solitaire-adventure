import logo from './logo.svg';
import './App.sass';
import newDeal from './functions/newDeal'
import {useState, createContext} from "react"
import Foundation from "./components/foundation"
import Draw from "./components/draw"
import Stack from "./components/stack"

export const DraggedCard = createContext({
  draggedCard: -1,
  setDraggedCard: () => {}
})

function App() {

  ////////////////////////
  // Constants
  ////////////////////////

  const [piles, setPiles] = useState([])
  const [faceUpPiles, setFaceUpPiles] = useState([])
  const [draw, setDraw] = useState([])
  const [foundation, setFoundation] = useState({
    hearts: [],
    spades: [],
    clubs: [],
    diamonds: []
  })
  const [shownCards, setShownCards] = useState([])
  const [draggedCard, setDraggedCard] = useState(-1)

  const value = {draggedCard, setDraggedCard}
  
  ////////////////////////
  // Functions
  ////////////////////////

  const newCards = () => {
    const cards = newDeal()
    setPiles(cards.piles)
    setDraw(cards.draw)
    setFaceUpPiles(cards.faceUpPiles)
    setShownCards([])
    setFoundation({
      hearts: [],
      spades: [],
      clubs: [],
      diamonds: []
    })
  }

  ////////////////////////
  // Render
  ////////////////////////

  return (
    <DraggedCard.Provider
      value={value}
    >
      <div className="App">
        <button
          onClick={newCards}
        >New Deal</button>
        <div id='top-row'>
          <Foundation 
            foundation={foundation}
            setFoundation={setFoundation}
            shownCards={shownCards}
            setShownCards={setShownCards}
          />
          <Draw 
            drawPileCards={draw}
            shownCards={shownCards}
            setDrawPileCards={setDraw}
            setShownCards={setShownCards}
          />
        </div>
        <div id='stacks'>
          <Stack 
            faceDownPile={piles[0]}
            faceUpPile={faceUpPiles[0]}
          />
          <Stack 
            faceDownPile={piles[1]}
            faceUpPile={faceUpPiles[1]}
          />
          <Stack 
            faceDownPile={piles[2]}
            faceUpPile={faceUpPiles[2]}
          />
          <Stack 
            faceDownPile={piles[3]}
            faceUpPile={faceUpPiles[3]}
          />
          <Stack 
            faceDownPile={piles[4]}
            faceUpPile={faceUpPiles[4]}
          />
          <Stack 
            faceDownPile={piles[5]}
            faceUpPile={faceUpPiles[5]}
          />
          <Stack 
            faceDownPile={piles[6]}
            faceUpPile={faceUpPiles[6]}
          />
        </div>
      </div>
    </DraggedCard.Provider>
  );
}

export default App;
