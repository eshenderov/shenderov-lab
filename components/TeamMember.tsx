import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  src: string;
  children: string;
}

const TeamMember = ({ name, src, children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <button
        className="relative flex cursor-pointer flex-col items-center justify-center gap-4 p-4 flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_33%] lg:p-8 lg:px-8 xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]"
        onClick={() => setVisible(true)}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-full">
          <Image src={src} alt={`${name}`} layout="fill" />
        </div>
        <p className="text-center text-xl text-white">{name}</p>
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex h-[100vh] w-screen cursor-pointer items-center justify-center bg-raisin/95"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onTap={() => setVisible(false)}
          >
            <motion.div
              className="w-4/5 max-w-[44rem] origin-bottom rounded-2xl bg-raisin-bright p-8 text-lg text-white shadow-lg shadow-logo md:w-1/2"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 50,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamMember;
