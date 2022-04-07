import logo from './logo.svg';
import './App.css';
import newDeal from './functions/newDeal'
import {useState} from "react"

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
    </div>
  );
}

export default App;
