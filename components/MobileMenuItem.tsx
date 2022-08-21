import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface Props {
  to: string;
}

const MobileNavItem: React.FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => {
  return (
    <li className="text-blue-dark hover:text-blue-light text-center text-2xl font-bold duration-200">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default MobileNavItem;
