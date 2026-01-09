import { Rnd } from "react-rnd";

const DraggableScreen = ({ title, defaultWidth, defaultHeight, onClose, children }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: defaultWidth,
        height: defaultHeight,
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
      <div className="p-4 flex-1 overflow-auto">{children}</div>
    </Rnd>
  );
};

export default DraggableScreen;
