import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeCard from "./HomeCard/HomeCard";
import DraggableScreen from "../DraggableScreen";

const Home = () => {
  const [openScreen, setOpenScreen] = useState(null);

  return (
    <div className="w-full h-screen bg-blue-200 flex flex-col relative">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <HomeCard setOpenScreen={setOpenScreen} />
      </main>

      {openScreen && (
        <DraggableScreen
          title={openScreen}
          onClose={() => setOpenScreen(null)}
        />
      )}
    </div>
  );
};

export default Home;
