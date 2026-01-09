import { Rnd } from "react-rnd";

const DraggableScreen = ({ title, onClose }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      className="bg-white rounded-lg shadow-lg flex flex-col"
    >
      {/* Header */}
      <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
        <span>{title}</span>
        <button onClick={onClose} className="font-bold text-lg">
          ✖
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 overflow-auto">
        <p>This is the {title} content!</p>
        <p>Add your About Me text here.</p>
      </div>
    </Rnd>
  );
};

export default DraggableScreen;
