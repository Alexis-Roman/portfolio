import HomeGreeting from "./HomeGreeting";
import HomeLink from "./HomeLink";
import { faIdCard, faAward, faBook, faAt } from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({ openScreen }) => {
  return (
    <div className="h-130 bg-white w-3xl rounded-t-lg shadow-lg">
      {/* Header */}
      <div className="h-14 bg-yellow-300 flex items-center px-4 text-white font-bold rounded-t-lg">
        home
      </div>

      {/* Greeting */}
      <HomeGreeting />

      {/* Links */}
      <div className="flex justify-center space-x-25">
        <HomeLink icon={faIdCard} label="about me" onClick={() => openScreen("About Me")} />
        <HomeLink icon={faBook} label="projects" onClick={() => openScreen("Project")} />
        <HomeLink icon={faAward} label="certificates" onClick={() => openScreen("Certificate")} />
        <HomeLink icon={faAt} label="contact" onClick={() => openScreen("Contact")} />
      </div>
    </div>
  );
};

export default HomeCard;
