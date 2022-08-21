import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="border-b-blue-dark absolute top-20 left-0 w-full border-b bg-white sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul className="m-4 flex-col space-y-2 text-center">
            <NavItem to="/">Register</NavItem>
            <NavItem to="/info">Info</NavItem>
            <NavItem to="/updates">Updates</NavItem>
            <NavItem to="/board">Board</NavItem>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
