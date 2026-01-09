import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlippableID = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div
        key="front"
        className="w-64 h-40 bg-blue-500 text-white rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-lg font-bold">name</h2>
        <p>ID: 123456</p>
        <p>Click to flip</p>
      </div>

      {/* Back of the card */}
      <div
        key="back"
        className="w-64 h-40 bg-yellow-400 text-black rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-lg font-bold">heyyyy</h2>
        <p></p>
        <p></p>
      </div>
    </ReactCardFlip>
  );
};

export default FlippableID;
