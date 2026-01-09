import React from "react";
import DraggableScreen from "../DraggableScreen";
import Carousel from "../Carousel";

const ProjectScreen = ({ onClose }) => {
  const items = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"];

  return (
    <DraggableScreen
      title="Projects"
      defaultWidth={600}
      defaultHeight={400}
      onClose={onClose}
    >
      <div className="flex flex-col h-full p-4 justify-center p-5">

        {/* Carousel fills remaining space */}
        <div className="flex-1">
          <Carousel items={items} />
        </div>
      </div>
    </DraggableScreen>
  );
};

export default ProjectScreen;
