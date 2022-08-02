import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  return (
    <nav className="flex h-16 w-screen items-center justify-between bg-transparent">
      <div className="flex aspect-square h-full items-center justify-center">
        <div className="relative h-2/3 w-2/3">
          <Image
            src="/shenderov-lab-logo.png"
            alt="Shenderov Lab Logo"
            layout="fill"
          />
        </div>
      </div>
      <ul className="flex gap-8 pr-8">
        <NavItem to="team">Team</NavItem>
        <NavItem to="publications">Publications</NavItem>
        <NavItem to="research">Research</NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
