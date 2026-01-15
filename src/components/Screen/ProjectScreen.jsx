import React, { useState } from "react";
import DraggableScreen from "../DraggableScreen";
import Marquee from "react-fast-marquee";
import FilmHoles from "../FilmHoles";

const ProjectScreen = ({ onClose }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleEnter = () => setIsPaused(true);
  const handleLeave = () => setIsPaused(false);

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
      defaultHeight={430}
      defaultX={1000}
      defaultY={100}
      onClose={onClose}
      color="bg-pink-400"
    >
      <div
        className="h-full w-full flex flex-col items-center pb-4"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* TOP FILM HOLES */}
        <Marquee
          play={!isPaused}
          speed={60}
          gradient={false}
          autoFill
          className="w-full flex items-center pb-2 bg-pink-200"
        >
          <FilmHoles />
        </Marquee>

        {/* PROJECTS */}
        <Marquee
          play={!isPaused}
          speed={60}
          gradient={false}
          autoFill
          className="w-full flex items-center bg-pink-200"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl relative mx-4 w-48 h-64 shadow-sm overflow-hidden group cursor-pointer flex items-center justify-center bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full h-full object-contain bg-white p-2"
              />

              <div className="absolute inset-0 bg-black/80 text-white p-4
                              flex flex-col items-center justify-center text-center
                              text-sm opacity-0 transition-opacity duration-300
                              group-hover:opacity-100">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* BOTTOM FILM HOLES */}
        <Marquee
          play={!isPaused}
          speed={60}
          gradient={false}
          autoFill
          className="w-full flex items-center pt-2 bg-pink-200"
        >
          <FilmHoles />
        </Marquee>
      </div>
    </DraggableScreen>
  );
};

export default ProjectScreen;
