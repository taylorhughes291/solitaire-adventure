import logo from './logo.svg';
import './App.sass';
import newDeal from './functions/newDeal'
import {useState} from "react"
import Foundation from "./components/foundation"

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
    <div classNameName="App">
      <button
        onClick={newCards}
      >New Deal</button>
      <Foundation />
    </div>
  );
}

export default App;
