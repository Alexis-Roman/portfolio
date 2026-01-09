import { useState } from 'react'
import './App.css'
import ReactCardFlip from 'react-card-flip';
import Home from './components/home/home';

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
