import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="font-jersey text-3xl h-14 bg-blue-300 flex items-center justify-between px-10 text-white">
      
      <span>Portfolio</span>

      <button className="text-xl">
        <FontAwesomeIcon icon={faMoon} />
      </button>

    </nav>
  );
};

export default Navbar;
