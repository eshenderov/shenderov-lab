import Link from "next/link";
import { Link as ScrollLink} from "react-scroll";

interface Props {
  to: string;
  children: string;
}

const NavItem = ({ to, children }: Props) => {
  const isExternalLink = to.startsWith("http"); // Check if it's an external link
  const isPageLink = to.startsWith("/")
  return (
    <li>
      {isPageLink?(
        <Link href={to}>
          <a className="cursor-pointer text-lg font-medium text-green-apple">
            {children}
          </a>
        </Link>
      ) : isExternalLink ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-lg font-medium text-green-apple"
        >
          {children}
        </a>
      ):(
      <ScrollLink
        className="cursor-pointer text-lg font-medium text-green-apple"
        to={to}
        duration={600}
        smooth="easeInOutQuart"
      >
        {children}
      </ScrollLink>
      )}
    </li>
  );
};

export default NavItem;
