import Link from "next/link";

interface Props {
  to: string;
  children: string;
}

// TODO: delete and link to correct section
const MobileNavItem = ({ to, children }: Props) => {
  return (
    <li className="text-blue-dark hover:text-blue-light text-center text-2xl font-bold duration-200">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default MobileNavItem;
