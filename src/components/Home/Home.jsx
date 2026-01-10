import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HomeCard from "./HomeCard/HomeCard";
import AboutMeScreen from "../Screen/AboutMeScreen";
import ProjectScreen from "../Screen/ProjectScreen";
import CertificateScreen from "../Screen/CertificateScreen";
import ContactScreen from "../Screen/ContactScreen";
import Marquee from "react-fast-marquee";

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
    <div className="w-full h-screen bg-[linear-gradient(to_bottom,#FEF9C3_60%,#BFDBFE_40%)] flex flex-col relative overflow-hidden">

      <Navbar />
      <div className="flex flex-col w-full"></div>

      <main className="flex-1 z-10 flex items-center justify-center">
        <HomeCard openScreen={openScreen} />
      </main>

<div className="absolute z-0 bottom-0 left-0 w-full h-[40%] overflow-hidden pointer-events-none">
  <Marquee
    speed={20}
    gradient={false}
    autoFill
    className="h-full"
    pauseOnHover
  >
    <img
      src="/images/cloud.webp" // long image already containing cloud1cloud2cloud3
      alt="clouds"
      className="h-120 w-auto object-contain block"
    />
  </Marquee>
</div>

      {/* Render draggable screens */}
      {openScreens.includes("About Me") && <AboutMeScreen onClose={() => closeScreen("About Me")} />}
      {openScreens.includes("Project") && <ProjectScreen onClose={() => closeScreen("Project")} />}
      {openScreens.includes("Certificate") && <CertificateScreen onClose={() => closeScreen("Certificate")} />}
      {openScreens.includes("Contact") && <ContactScreen onClose={() => closeScreen("Contact")} />}
    </div>
  );
};

export default Home;
