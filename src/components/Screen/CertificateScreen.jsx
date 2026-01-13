import React, { useState } from "react";
import DraggableScreen from "../DraggableScreen";

const certificates = [
  {
    title: "Programming (Java) NC III",
    issuer: "TESDA",
    date: "Oct 2025",
    file: "/images/tesda-java.jpg",
  },
  {
    title: "Supervised Industry Learning in Programming (Java) NC III",
    issuer: "Spring Valley Tech Corp",
    date: "Oct 2025",
    file: "/images/spring valley.jpg",
  },
  {
    title: "Nihongo for Everyone 1: Basic Japanese Language for Beginners",
    issuer: "Ateneo de Manila University",
    date: "Sept 2019",
    file: "/images/jap-cert.png",
  },
];

const CertificateScreen = ({ onClose }) => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1) % certificates.length);
  const prev = () =>
    setIndex((i) => (i - 1 + certificates.length) % certificates.length);

  return (
    <DraggableScreen
      title="certificates"
      defaultWidth={700}
      defaultHeight={500}
      defaultX={420}
      defaultY={60}
      onClose={onClose}
      color="bg-blue-500"
    >
      <div className="relative h-full overflow-hidden">
        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-blue-100 w-full flex-shrink-0 flex flex-row items-center justify-start p-6 space-x-4"
            >
              {/* Certificate image */}
              <div className="w-7/10 h-90 bg-blue-100 rounded-lg overflow-hidden flex items-center justify-center">
                {cert.file.endsWith(".pdf") ? (
                  <span className="text-red-500 font-bold text-xl">PDF</span>
                ) : (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Details */}
              <div className="w-3/10 text-left ">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2
                     bg-white/80 rounded-full p-2 hover:bg-white"
        >
          {"<"}
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     bg-white/80 rounded-full p-2 hover:bg-white"
        >
          {">"}
        </button>
      </div>
    </DraggableScreen>
  );
};

export default CertificateScreen;
