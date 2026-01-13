import React, { useState } from "react";
import DraggableScreen from "../DraggableScreen";

const certificates = [
  {
    title: "Programming (Java) NC III",
    issuer: "TESDA",
    date: "Oct 2025",
    file: "/certificates/react_cert.jpg",
  },
  {
    title: "Supervised Industry Learning in Programming (Java) NC III",
    issuer: "Spring Valley Tech Corp",
    date: "Oct 2025",
    file: "/certificates/python_cert.jpg",
  },
  {
    title: "Nihongo for Everyone 1: Basic Japanese Language for Beginners",
    issuer: "Ateneo de Manila University",
    date: "Sept 2019",
    file: "/certificates/uiux_cert.jpg",
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
      defaultY={80}
      onClose={onClose}
      color="bg-blue-500"
    >
      <div className="relative h-full overflow-hidden">
        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex items-center justify-center p-6"
            >
              {/* Certificate with hover overlay */}
              <div className="relative w-full h-72 rounded-lg overflow-hidden group bg-gray-200">
                {cert.file.endsWith(".pdf") ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-red-500 font-bold text-xl">PDF</span>
                  </div>
                ) : (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Hover details */}
                <div
                  className="absolute inset-0 bg-black/80 text-white
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300
                             flex flex-col items-center justify-center
                             text-center p-4"
                >
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm">{cert.issuer}</p>
                  <p className="text-sm mb-3">{cert.date}</p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2
                     bg-white/80 rounded-full p-3 hover:bg-white
                     text-xl font-bold select-none"
        >
          {"<"}
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     bg-white/80 rounded-full p-3 hover:bg-white
                     text-xl font-bold select-none"
        >
          {">"}
        </button>
      </div>
    </DraggableScreen>
  );
};

export default CertificateScreen;
