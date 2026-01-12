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
      {/* Front */}
      
      <div
        key="front"
        className="w-100 h-65 bg-white text-black rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer"
        onClick={handleClick}
      >

        <div className="relative rounded-lg overflow-hidden w-[400px]">

          <div className="absolute inset-0 text-xl leading-4 font-mono text-black opacity-5 pointer-events-none select-none">
            01101000 01100101 01111001 00100000 01101001 01110100 
            01110011 00100000 01101110 01101001 01100011 01100101 
            00100000 01110100 01101111 00100000 01101101 01100101 
            01100101 01110100 00100000 01111001 01101111 01110101 
            00100001 00100000 01101000 01101111 01110111 00100000 
            01100100 01101001 01100100 00100000 01111001 01101111 
            01110101 00100000 01101011 01101110 01101111 01110111 
            00100000 01110100 01101111 00100000 01110100 01110010 
            01100001 01101110 01110011 01101100 01100001 01110100 
            01100101 00100000 01110100 01101000 01101001 01110011 
            00100000 01101111 00101110
          </div>

          <div className="relative flex flex-col">

            {/* Header */}
            <div className="bg-pink-300 h-8 font-jersey text-xl flex items-center justify-center rounded-t-lg">
              <h1>IDENTIFICATION CARD</h1>
            </div>

            {/* Body */}
            <div className="flex flex-row p-2 gap-2">

              {/* Picture */}
              <div className="w-40 h-45 bg-red-100 flex items-center justify-center border border-red-300 rounded">
                <span className="text-sm opacity-60">PHOTO</span>
              </div>

              {/* Details */}
              <div className="relative w-60 h-45 rounded p-3 text-sm overflow-hidden">

                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10"
                  style={{ backgroundImage: "url('/images/id-logo.png')" }}
                />

                <div className="relative z-10">
                  <p><strong>Name:</strong> Alexis Nicole B. Roman</p>
                  <p><strong>Date of Birth:</strong> July 06, 2003</p>
                  <p><strong>Pronoun:</strong> She/Her</p>
                  <p><strong>Hobbies:</strong> Gaming, Reading, Watching Anime</p>
                </div>

              </div>

            </div>

            <div className="bg-pink-300 h-6 font-jersey text-sm flex items-center justify-center rounded-b-lg">
              <h1>If found please return to owner.</h1>
            </div>

          </div>
        </div>

      
      </div>

      {/* Back of the card */}
      <div
        key="back"
        className="w-100 h-65 bg-yellow-100 text-black rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-col rounded-lg">

          <div className="flex flex-row">
            <div className="w-40 h-50 bg-red-100">educ</div>
            <div className="w-60 h-50 bg-blue-300 ">experience</div>
          </div>

        </div>
      </div>
    </ReactCardFlip>
  );
};

export default FlippableID;
