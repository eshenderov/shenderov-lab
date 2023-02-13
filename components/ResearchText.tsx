import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: string | ReactNode;
}

const ResearchText = ({ children }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  return (
    <motion.div
      ref={ref}
      className="flex h-screen items-center text-xl text-green-apple"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ResearchText;
