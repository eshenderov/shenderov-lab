import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  show: boolean;
}

const ResearchImage = ({ src, show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 bottom-0 my-auto aspect-video w-full rounded-2xl bg-logo"
        >
          {src}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResearchImage;
