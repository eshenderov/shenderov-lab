import React from "react";

interface Props {
  href: string;
}

const ButtonLink: React.FC<Props> = ({ href }) => {
  return (
    <a
      href={href}
      className="relative my-auto flex h-16 w-16 flex-none items-center justify-center"
    >
      <div className="absolute rounded-full">
        <svg width="64" height="64">
          <circle
            className="fill-transparent stroke-raisin/25 stroke-2"
            r="30"
            cx="32"
            cy="32"
          ></circle>
          <circle
            className="circle fill-transparent stroke-logo-invert stroke-2"
            r="30"
            cx="32"
            cy="32"
          ></circle>
        </svg>
      </div>
      <span>
        <svg width="24" height="24" viewBox="0 0 16 16">
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </span>
    </a>
    // <a
    //   className="relative my-auto hidden aspect-square h-16 items-center justify-center rounded-full border-2 border-raisin/25 sm:flex"
    //   href={href}
    //   target="_blank"
    //   rel="noreferrer"
    // >
    //   <div>
    //     <svg width="24" height="24" viewBox="0 0 16 16">
    //       <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
    //     </svg>
    //     <svg>
    //       <circle className="absolute"></circle>
    //     </svg>
    //   </div>
    // </a>
  );
};

export default ButtonLink;
