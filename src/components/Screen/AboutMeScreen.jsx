import DraggableScreen from "../DraggableScreen";
import FlippableID from "./FlippableID";

const AboutMeScreen = ({ onClose }) => {
  return (
    <DraggableScreen 
      title="about me" 
      defaultWidth={450} 
      defaultHeight={300}
      defaultX={60}
      defaultY={100} 
      onClose={onClose} 
      color="bg-red-500">
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        
        <FlippableID />
      </div>
    </DraggableScreen>
  );
};

export default AboutMeScreen;
