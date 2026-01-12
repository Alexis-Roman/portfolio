import DraggableScreen from "../DraggableScreen";
import FlippableID from "./FlippableID";

const AboutMeScreen = ({ onClose }) => {
  return (
    <DraggableScreen 
      title="about me" 
      defaultWidth={420} 
      defaultHeight={340}
      defaultX={80}
      defaultY={150} 
      onClose={onClose} 
      color="bg-red-500">
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        
        <FlippableID className="w-full h-full" />
      </div>
    </DraggableScreen>
  );
};

export default AboutMeScreen;
