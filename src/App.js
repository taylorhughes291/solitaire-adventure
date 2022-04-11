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
  
  ////////////////////////
  // Functions
  ////////////////////////

  const newCards = () => {
    const cards = newDeal()
    setPiles(cards.piles)
    setDraw(cards.draw)
    setFaceUpPiles(cards.faceUpPiles)
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
          cards={draw}
        />
      </div>
      <div id='stacks'>
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </div>
      <Card 
        value={45}
        faceUp={false}
      />
    </div>
  );
}

export default App;
