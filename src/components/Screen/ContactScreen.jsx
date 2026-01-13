import DraggableScreen from "../DraggableScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const ContactScreen = ({ onClose }) => {
  return (
    <DraggableScreen
      title="contact"
      defaultWidth={470}
      defaultHeight={300}
      defaultX={550}
      defaultY={455}
      onClose={onClose}
      color="bg-amber-300"
    >
      <div className="flex h-full items-center justify-center p-4">
        {/* Business card */}
        <div className="h-50 flex items-center bg-amber-100 shadow-md rounded-lg w-full max-w-md p-4">
          
          {/* Left: Avatar / Logo (VERTICALLY CENTERED) */}
          <div className="w-24 h-24 bg-amber-300 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
            ANR
          </div>

          {/* Right: Contact Details */}
          <div className="flex-1 ml-4 flex flex-col justify-center space-y-2">
            <h2 className="text-xl font-bold">
              Alexis Nicole Roman
            </h2>

            <div className="flex items-center text-gray-600 space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>romanalexisnicole67@gmail.com</span>
            </div>

            <div className="flex items-center text-gray-600 space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+63 920 291 0437</span>
            </div>

            <div className="flex items-center text-gray-600 space-x-2">
              <FontAwesomeIcon icon={faGlobe} />
              <span>yourwebsite.com</span>
            </div>
          </div>
        </div>
      </div>
    </DraggableScreen>
  );
};

export default ContactScreen;
