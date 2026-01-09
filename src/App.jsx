import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactCardFlip from 'react-card-flip';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='card' onClick={flipCard}>
          <h1>Front</h1>
        </div>
        <div className='card card-back' onClick={flipCard}>
          <h1>Back</h1>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default App
