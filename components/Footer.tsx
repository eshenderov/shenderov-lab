import {
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBuildingUser, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-8 py-8 px-12 text-center text-white sm:py-16 sm:px-32 xl:px-48">
      <div className="flex items-center gap-8">
        <a href="https://www.linkedin.com/in/eugene-shenderov-m-d-d-phil-facp-46384a7b/">
          <FontAwesomeIcon className="h-8 w-8" icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/doceshenderov">
          <FontAwesomeIcon className="h-8 w-8" icon={faTwitterSquare} />
        </a>
        <a href="https://www.hopkinsmedicine.org/profiles/details/eugene-shenderov">
          <FontAwesomeIcon className="h-8 w-8" icon={faBuildingUser} />
        </a>
        <a href="https://scholar.google.com/citations?user=YarQeqEAAAAJ&hl=en">
          <FontAwesomeIcon className="h-8 w-8" icon={faBookOpen} />
        </a>
      </div>
      <div>
        <p className="pb-4">Eugene.Shenderov@jhmi.edu</p>
        <p>© Shenderov Lab 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
