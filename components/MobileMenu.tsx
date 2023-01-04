import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute top-32 left-0 z-50 w-full border-b border-b-logo bg-raisin lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .15, ease: "linear" }}
        >
          <ul className="flex flex-col gap-6 py-6 text-center">
            <NavItem to="research">Research</NavItem>
            <NavItem to="team">Team</NavItem>
            <NavItem to="news">News</NavItem>
            <NavItem to="publications">Publications</NavItem>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
