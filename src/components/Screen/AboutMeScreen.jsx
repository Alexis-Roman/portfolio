import DraggableScreen from "../DraggableScreen";

const AboutMeScreen = ({ onClose }) => {
  return (
    <DraggableScreen title="About Me" defaultWidth={400} defaultHeight={300} onClose={onClose}>
      
    </DraggableScreen>
  );
};

export default AboutMeScreen;
