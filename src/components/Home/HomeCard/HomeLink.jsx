import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeLink = ({ icon, label, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="text-5xl pb-2" />
      <div>{label}</div>
    </div>
  );
};

export default HomeLink;
