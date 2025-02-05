import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  to: string;
  children: string;
}

const NavItem = ({ to, children }: Props) => {
  const isExternalLink = to.startsWith("http"); // Check if it's an external URL
  const isPageLink = to.startsWith("/") && !isExternalLink;

  if (isExternalLink) {
    // External links (e.g., Shiny app or any non-Next.js pages)
    return (
      <li>
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-lg font-medium text-green-apple"
        >
          {children}
        </a>
      </li>
    );
  }

  if (isPageLink) {
    // Next.js internal page links
    return (
      <li>
        <Link href={to}>
          <a className="cursor-pointer text-lg font-medium text-green-apple">
            {children}
          </a>
        </Link>
      </li>
    );
  }

  // Smooth scrolling links
  return (
    <li>
      <ScrollLink
        className="cursor-pointer text-lg font-medium text-green-apple"
        to={to}
        duration={600}
        smooth="easeInOutQuart"
      >
        {children}
      </ScrollLink>
    </li>
  );
};

export default NavItem;