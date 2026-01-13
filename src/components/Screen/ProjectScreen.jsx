import React from "react";
import DraggableScreen from "../DraggableScreen";
import Marquee from "react-fast-marquee";

const ProjectScreen = ({ onClose }) => {
  const items = [
    {
      title: "Project 1",
      description: "Web app built with React and Tailwind",
    },
    {
      title: "Project 2",
      description: "Arduino-based hardware project",
    },
    {
      title: "Project 3",
      description: "Mobile app prototype",
    },
    {
      title: "Project 4",
      description: "Desktop-style portfolio UI",
    },
    {
      title: "Project 5",
      description: "Full stack school project",
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
      <div className="h-full flex items-center">
        <Marquee
          pauseOnHover
          speed={35}
          gradient={false}
          autoFill
          className="w-full"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative mx-4 w-48 h-40 rounded-xl shadow-lg
                         bg-white overflow-hidden group cursor-pointer"
            >
              {/* Default content */}
              <div
                className="absolute inset-0 flex items-center justify-center
                           text-lg font-semibold transition-opacity
                           group-hover:opacity-0"
              >
                {item.title}
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-black/80 text-white p-4
                           flex items-center justify-center text-center text-sm
                           opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              >
                {item.description}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </DraggableScreen>
  );
};

export default ProjectScreen;
