import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Props {
  children: string;
}

const ResearchText = ({ children }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {margin: "50% 50% 50% 0%"});

  useEffect(() => {
    console.log(`${children}: ${isInView}`);
  }, [isInView]);

  return (
    <div className="py-[30vw]">
      <div ref={ref}>
        <AnimatePresence>
          {isInView && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xl text-green-apple"
            >
              {children}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResearchText;
