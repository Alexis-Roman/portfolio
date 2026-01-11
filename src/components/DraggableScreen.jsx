import { Rnd } from "react-rnd";

const DraggableScreen = ({ title, defaultWidth, defaultHeight, defaultX, defaultY, onClose, children, color }) => {
  return (
    <Rnd
      default={{
        x: defaultX,
        y: defaultY,
        width: defaultWidth,
        height: defaultHeight,
      }}
      enableResizing={false}
      bounds="parent"
      className="bg-white rounded-lg shadow-lg flex flex-col z-20"
    >
      {/* Header */}
      <div className={`font-jersey text-xl text-white px-4 py-2 flex justify-between items-center rounded-t-lg ${color}`}>
        <span>{title}</span>
        <button onClick={onClose} className="font-jersey text-xl">
          X
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 overflow-auto">{children}</div>
    </Rnd>
  );
};

export default DraggableScreen;
