import React from "react";
import { useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavItem from "./NavItem";

const NavBar = () => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <nav
      className={`absolute z-50 flex h-32 w-full items-center justify-between duration-150 ease-linear ${
        open ? "bg-raisin lg:bg-transparent" : ""
      }`}
    >
      <div className="flex aspect-square h-full items-center justify-center">
        <div className="relative aspect-square h-3/4">
          <Link href="/favicon.png">
            <a>
              <Image
                src="/favicon.png"
                alt="Shenderov Lab Logo"
                layout="fill"
              />
            </a>
          </Link>
        </div>
      </div>

      <ul className="hidden gap-12 pr-12 lg:flex">
        <NavItem to="research">Research</NavItem>
        <NavItem to="team">Team</NavItem>
        <NavItem to="news">News</NavItem>
        <NavItem to="news archive">News Archive</NavItem>
        <NavItem to="publications">Publications</NavItem>
        <NavItem to="http://54.227.218.210:3838/">Tools</NavItem>
        <NavItem to="donation">Donation</NavItem>
      </ul>

      <MobileMenuToggle open={open} handleClick={() => toggleOpen()} />

      <MobileMenu open={open} />
    </nav>
  );
};

export default NavBar;
