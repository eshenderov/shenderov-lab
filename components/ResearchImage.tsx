import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  show: boolean;
}

const ResearchImage = ({ src, alt, show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 bottom-0 my-auto aspect-video w-full rounded-2xl bg-[#000000]"
        >
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResearchImage;
