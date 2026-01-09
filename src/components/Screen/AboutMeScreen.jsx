import DraggableScreen from "../DraggableScreen";
import FlippableID from "./FlippableID";

const AboutMeScreen = ({ onClose }) => {
  return (
    <DraggableScreen title="About Me" defaultWidth={400} defaultHeight={300} onClose={onClose}>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        
        <FlippableID />
      </div>
    </DraggableScreen>
  );
};

export default AboutMeScreen;
