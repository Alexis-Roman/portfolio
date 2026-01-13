import React from "react";
import DraggableScreen from "../DraggableScreen";
import Marquee from "react-fast-marquee";

const ProjectScreen = ({ onClose }) => {
  const items = [
    {
      title: "FOX-e Bank",
      description:
        "Role: Full-Stack Developer. Developed a Java banking web application with React for the frontend, showcasing core banking functionalities learned from TESDA Java NC III.",
      image: "/images/fox-e-bank.png",
    },
    {
      title: "Wikino",
      description:
        "Role: UI/UX Designer & Frontend Developer. Built a translation app for Philippine languages using Kotlin, combining design and frontend development skills.",
      image: "/images/wikino.png",
    },
    {
      title: "Upcycle",
      description:
        "Role: Backend & Web Developer. Created a recycling guide website using Python and Flask, providing step-by-step instructions to repurpose materials sustainably.",
      image: "/images/upcycle.png",
    },
    {
      title: "Timelens",
      description:
        "Role: UI/UX Designer. Designed user interfaces and prototypes in Figma for an AI-driven concept that generates and restores images of ruins and broken artifacts in the Philippines.",
      image: "/images/timelens.png",
    },
    {
      title: "Rod's Website & Timelens",
      description:
        "Role: UI/UX Designer. Created user interfaces and prototypes in Figma for a website promoting a printing business, allowing users to view products and services, and book appointments online.",
      image: "/images/rod's-printing.png",
    },
  ];

  return (
    <DraggableScreen
      title="projects"
      defaultWidth={500}
      defaultHeight={350}
      defaultX={1000}
      defaultY={100}
      onClose={onClose}
      color="bg-pink-400"
    >
      <div className="h-full w-full flex items-center p-4">
        <Marquee
          pauseOnHover
          speed={60}
          gradient={false}
          autoFill
          className="w-full h-full flex items-center"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative mx-4 w-48 h-64 rounded-xl shadow-sm overflow-hidden group cursor-pointer flex items-center justify-center bg-gray-100"
            >
              {/* Project Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain bg-pink-100 p-2"
                />
              )}

              {/* Hover overlay: title + description */}
              <div
                className="absolute inset-0 bg-black/80 text-white p-4
                           flex flex-col items-center justify-center text-center
                           text-sm opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </DraggableScreen>
  );
};

export default ProjectScreen;
