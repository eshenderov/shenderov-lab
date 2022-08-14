import React, { type PropsWithChildren } from "react";
import { Link } from "react-scroll";

interface Props {
  to: string;
}

const NavItem: React.FC<PropsWithChildren<Props>> = ({ to, children }) => {
  return (
    <li>
      {/* color? */}
      <Link
        className="text-white cursor-pointer text-lg"
        to={to}
        duration={600}
        smooth="easeInOutQuart"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
