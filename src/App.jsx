import { useState } from 'react'
import './App.css'
import ReactCardFlip from 'react-card-flip';
import Home from './components/Home/Home';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <>
      <Home />
      
    </>
  )
}

export default App
