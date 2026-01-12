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
            <div className="bg-pink-300 text-white h-8 tracking-widest font-jersey text-xl flex items-center justify-center rounded-t-lg">
              <h1>IDENTIFICATION CARD</h1>
            </div>

            {/* Body */}
            <div className="flex flex-row p-2 gap-2">

            <div className="w-40 h-45 border border-red-300 rounded overflow-hidden">
              <img
                src="/images/my-pic.png"
                alt="ID photo"
                className="w-full h-full object-cover"
                style={{ imageRendering: "auto" }}
              />
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

            <div className="tracking-widest bg-pink-300 text-white h-6 font-jersey text-sm flex items-center justify-center rounded-b-lg">
              <h1>If found please return to owner.</h1>
            </div>

          </div>
        </div>

      
      </div>

      {/* Back */}
      <div
        key="back"
        className="relative w-[400px] h-[260px] rounded-lg shadow-lg cursor-pointer overflow-hidden bg-white flex flex-col"
        onClick={handleClick}
      >

        {/* Binary background */}
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

        {/* Header */}
        <div className="tracking-widest text-white bg-pink-300 h-8 font-jersey text-xl flex items-center justify-center rounded-t-lg z-10">
          <h1>IDENTIFICATION CARD</h1>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-row w-full flex-1 p-3 gap-3 bg-transparent">

          {/* Education */}
          <div className="w-40 h-full rounded p-2 text-xs ">
            <h2 className="font-bold text-sm mb-2 text-center">Education</h2>

            <p className="font-semibold">Polytechnic University of the Philippines</p>
            <p className="italic">BS Computer Engineering</p>
            <p>2021 to 2025</p>

            <div className="mt-2">
              <p className="font-semibold">New Era University</p>
              <p className="italic">STEM Strand</p>
              <p>2019 to 2021</p>
            </div>
          </div>

          {/* Experience */}
          <div className="relative w-60 h-full rounded p-2 text-xs overflow-hidden">
            
            <div
              className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-10"
              style={{ backgroundImage: "url('/images/id-logo.png')" }}
            />
            <div className="relative z-10">
              <h2 className="font-bold text-sm mb-2 text-center">Experience</h2>

              <p className="font-semibold">MWORLD Trading</p>
              <p className="italic">MIS Department Intern</p>
              <p>August to October 2024</p>

              <div className="mt-2">
                <p className="font-semibold">Computer Village Com Inc</p>
                <p className="italic">IT Specialist Intern</p>
                <p>August to November 2023</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="tracking-widest text-white bg-pink-300 h-6 font-jersey text-sm flex items-center justify-center rounded-b-lg z-10">
          <h1>If found please return to owner.</h1>
        </div>

      </div>
    </ReactCardFlip>
  );
};

export default FlippableID;
