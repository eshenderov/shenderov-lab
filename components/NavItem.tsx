import { Link as ScrollLink} from "react-scroll";
import Link from "next/link";

interface Props {
  to: string;
  children: string;
}

const NavItem = ({ to, children }: Props) => {
  const isPageLink = to.startsWith("/")
  return (
    <li>
      {isPageLink?(
        <Link href={to}>
          <a className="cursor-pointer text-lg font-medium text-green-apple">
            {children}
          </a>
        </Link>
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
