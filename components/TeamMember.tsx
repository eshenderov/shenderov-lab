import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  src: string;
  children: string;
}

const TeamMember = ({ name, src, children }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <button
      className="relative flex-[0_0_50%] cursor-pointer items-center p-4 md:flex-[0_0_33%] lg:p-8 xl:flex-[0_0_25%] 2xl:flex-[0_0_20%]"
      onClick={() => setVisible(true)}
    >
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-full">
        <Image src={src} alt={`${name}`} layout="fill" />
      </div>
      <p className="text-center text-2xl font-medium text-peach">{name}</p>
      {/* TODO: change to modal */}
      <motion.div
        className="absolute top-1/2 left-1/2 p-8 w-full origin-bottom bg-peach"
        animate={visible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: "-150%", x: "-50%" },
          hidden: { opacity: 0, y:"-100%", x: "-50%" },
        }}
      >
        {children}
      </motion.div>
    </button>
  );
};

export default TeamMember;
