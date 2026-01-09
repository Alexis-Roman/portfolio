import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeCard from "./HomeCard/HomeCard";
import AboutMeScreen from "../Screen/AboutMeScreen";
import ProjectScreen from "../Screen/ProjectScreen";
import CertificateScreen from "../Screen/CertificateScreen";
import ContactScreen from "../Screen/ContactScreen";

const Home = () => {
  const [openScreens, setOpenScreens] = useState([]); // array of screen names

  const openScreen = (screenName) => {
    if (openScreens.length >= 5) return; // max 5 screens
    if (!openScreens.includes(screenName)) {
      setOpenScreens([...openScreens, screenName]);
    }
  };

  const closeScreen = (screenName) => {
    setOpenScreens(openScreens.filter((s) => s !== screenName));
  };

  return (
    <div className="w-full h-screen bg-blue-200 flex flex-col relative overflow-hidden">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <HomeCard openScreen={openScreen} />
      </main>

      {/* Render draggable screens */}
      {openScreens.includes("About Me") && <AboutMeScreen onClose={() => closeScreen("About Me")} />}
      {openScreens.includes("Project") && <ProjectScreen onClose={() => closeScreen("Project")} />}
      {openScreens.includes("Certificate") && <CertificateScreen onClose={() => closeScreen("Certificate")} />}
      {openScreens.includes("Contact") && <ContactScreen onClose={() => closeScreen("Contact")} />}
    </div>
  );
};

export default Home;
