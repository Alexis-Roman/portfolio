import HomeGreeting from "./HomeGreeting";
import HomeLink from "./HomeLink";
import { faIdCard, faAward, faBook, faAt } from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({ openScreen }) => {
  return (
    <div className="inset-shadow-sm inset-shadow-yellow-300 shadow-lg/80  shadow-amber-200 h-130 bg-white w-3xl rounded-t-lg shadow-lg">
      {/* Header */}
      <div className="font-jersey tracking-wider text-xl h-14 bg-yellow-300 flex items-center px-4 text-white rounded-t-lg">
        home
      </div>

      {/* Greeting */}
      <HomeGreeting />

      {/* Links */}
      <div className="font-pixel flex justify-center space-x-25">
        <HomeLink icon={faIdCard} color="text-red-500" label="about me"  onClick={() => openScreen("About Me")} />
        <HomeLink icon={faBook} color="text-pink-400" label="projects" onClick={() => openScreen("Project")} />
        <HomeLink icon={faAward} color="text-blue-500" label="certificates" onClick={() => openScreen("Certificate")} />
        <HomeLink icon={faAt} color="text-amber-300" label="contact" onClick={() => openScreen("Contact")} />
      </div>
    </div>
  );
};

export default HomeCard;
