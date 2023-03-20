import { motion } from "framer-motion";

interface Props {
  className: string;
  href: string;
}

const ButtonLink = ({ className, href }: Props) => {
  return (
    <motion.a
      className={`group relative my-auto h-16 w-16 flex-none items-center justify-center ${className}`}
      href={href}
      whileHover="hover"
    >
      <div className="absolute rounded-full">
        <svg width="64" height="64">
          <circle
            className="fill-transparent stroke-green-apple/50 stroke-2"
            r="30"
            cx="32"
            cy="32"
          ></circle>
          <motion.circle
            className="circle origin-center rotate-180 fill-transparent stroke-green-apple stroke-2"
            r="30"
            cx="32"
            cy="32"
            strokeDasharray={188.52174377441406}
            strokeDashoffset={188.52174377441406}
            variants={{
              hover: {
                strokeDashoffset: 0,
                transition: {
                  duration: 0.3,
                },
              },
            }}
          ></motion.circle>
        </svg>
      </div>
      <motion.svg
        className="stroke-green-apple"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        variants={{
          hover: {
            x: 4,
          },
        }}
      >
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
      </motion.svg>
    </motion.a>
  );
};

export default ButtonLink;
