import logo from './logo.svg';
import './App.sass';
import newDeal from './functions/newDeal'
import {useState, createContext, useEffect} from "react"
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
  const [draggedCard, setDraggedCard] = useState({
    value: -1,
    location: -1
  })

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

  useEffect(() => {
    if (faceUpPiles.length > 0) {
      let drawIndex = -1
      for (let i = 0; i < 7; i++) {
        if (faceUpPiles[i].length === 0 && piles[i].length > 0) {
          drawIndex = i
          break
        }
      }
      if (drawIndex >= 0) {

        const pilesCopy = piles.slice()
        const faceUpPilesCopy = faceUpPiles.slice()
        const topCard = pilesCopy[drawIndex].pop()
        faceUpPilesCopy[drawIndex].push(topCard)
        setFaceUpPiles(faceUpPilesCopy)
        setPiles(pilesCopy)
      }
    }
  }, [faceUpPiles])

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
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
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
            pile={0}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[1]}
            faceUpPile={faceUpPiles[1]}
            pile={1}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[2]}
            faceUpPile={faceUpPiles[2]}
            pile={2}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[3]}
            faceUpPile={faceUpPiles[3]}
            pile={3}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[4]}
            faceUpPile={faceUpPiles[4]}
            pile={4}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[5]}
            faceUpPile={faceUpPiles[5]}
            pile={5}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
          <Stack 
            faceDownPile={piles[6]}
            faceUpPile={faceUpPiles[6]}
            pile={6}
            faceUpPiles={faceUpPiles}
            setFaceUpPiles={setFaceUpPiles}
            shownCards={shownCards}
            setShownCards={setShownCards}
            foundation={foundation}
            setFoundation={setFoundation}
          />
        </div>
      </div>
    </DraggedCard.Provider>
  );
}

export default App;
