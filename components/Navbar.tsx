import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const NavBar: React.FC = () => {
  return (
    <nav className="absolute z-50 flex h-20 w-full items-center justify-between bg-transparent">
      <div className="flex aspect-square h-full items-center justify-center">
        <div className="relative aspect-square h-4/5">
          <Image
            src="/logo.png"
            alt="Shenderov Lab Logo"
            layout="fill"
          />
        </div>
      </div>
      <ul className="flex gap-8 pr-8">
        <NavItem to="team">Team</NavItem>
        <NavItem to="publications">Publications</NavItem>
        <NavItem to="research">Research</NavItem>
        <NavItem to="news">News</NavItem>
        <NavItem to="gallery">Gallery</NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
