import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: string;
}

const ResearchText = ({ children }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-50% 0% -5% 0%" });

  return (
    <div className="h-screen flex items-center">
      <div ref={ref}>
        <motion.p
          animate={isInView ? "visible" : "hidden"}
          className="text-xl text-green-apple"
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
        </motion.p>
      </div>
    </div>
  );
};

export default ResearchText;
