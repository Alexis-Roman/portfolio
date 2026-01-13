import DraggableScreen from "../DraggableScreen";

const ContactScreen = ({ onClose }) => {
  return (
    <DraggableScreen
      title="contact"
      defaultWidth={400} 
      defaultHeight={250}
      defaultX={550}
      defaultY={455} 
      onClose={onClose}
      color="bg-amber-300"
    >
      <div className="flex h-full items-center justify-center p-4">
        {/* Business card */}
        <div className="flex bg-white shadow-md rounded-lg w-full max-w-md p-4">
          {/* Left: Avatar / Logo */}
          <div className="w-24 h-24 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
            ANR
          </div>

          {/* Right: Contact Details */}
          <div className="flex-1 ml-4 flex flex-col justify-center space-y-1">
            <h2 className="text-xl font-bold">Alexis Nicole Roman</h2>
            <p className="text-gray-600">romanalexisnicole67@gmail.com</p>
            <p className="text-gray-600">+63 920 291 0437</p>
            <p className="text-gray-600">Website: will put link</p>
          </div>
        </div>
      </div>
    </DraggableScreen>
  );
};

export default ContactScreen;
