import logo from './logo.svg';
import './App.sass';
import newDeal from './functions/newDeal'
import {useState} from "react"
import Foundation from "./components/foundation"
import Draw from "./components/draw"
import Stack from "./components/stack"
import Card from "./components/card"

function App() {

  ////////////////////////
  // Constants
  ////////////////////////

  const [piles, setPiles] = useState([])
  const [faceUpPiles, setFaceUpPiles] = useState([])
  const [draw, setDraw] = useState([])
  const [foundation, setFoundation] = useState([])
  const [shownCards, setShownCards] = useState([])
  
  ////////////////////////
  // Functions
  ////////////////////////

  const newCards = () => {
    const cards = newDeal()
    setPiles(cards.piles)
    setDraw(cards.draw)
    setFaceUpPiles(cards.faceUpPiles)
    setShownCards([])
  }

  ////////////////////////
  // Render
  ////////////////////////

  return (
    <div className="App">
      <button
        onClick={newCards}
      >New Deal</button>
      <div id='top-row'>
        <Foundation />
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
  );
}

export default App;
