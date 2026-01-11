import React from "react";
import DraggableScreen from "../DraggableScreen";

const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "FreeCodeCamp",
    date: "Jan 2025",
    file: "/certificates/react_cert.jpg", // JPEG or PDF path
  },
  {
    title: "Python Data Science",
    issuer: "Coursera",
    date: "Dec 2024",
    file: "/certificates/python_cert.jpg",
  },
  {
    title: "UI/UX Design Basics",
    issuer: "Udemy",
    date: "Nov 2024",
    file: "/certificates/uiux_cert.jpg",
  },
];

const CertificateScreen = ({ onClose }) => {
  return (
    <DraggableScreen
      title="certificates"
      defaultWidth={700} 
      defaultHeight={400}
      defaultX={420}
      defaultY={80} 
      onClose={onClose}
      color="bg-blue-500"
    >
      <div className="flex flex-row h-full p-4 space-x-4 overflow-x-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            {/* Thumbnail */}
            <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden mb-4 flex items-center justify-center">
              {cert.file.endsWith(".pdf") ? (
                <span className="text-red-500 font-bold">PDF</span>
              ) : (
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-gray-600">Issuer: {cert.issuer}</p>
              <p className="text-gray-600">Date: {cert.date}</p>
              {cert.file && (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-1"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </DraggableScreen>
  );
};

export default CertificateScreen;
