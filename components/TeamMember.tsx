import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  position: string;
  src: string;
}

const TeamMember: React.FC<Props> = ({ name, position, src }) => {
  return (
    <div className="flex-[0_0_50%] p-4 md:flex-[0_0_33%] lg:p-6 xl:flex-[0_0_25%] xl:p-6 2xl:flex-[0_0_20%]">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-full">
        <Image src={src} alt={`${name}, ${position}`} layout="fill" />
      </div>
      <p className="text-center text-3xl pb-1 font-medium text-peach">{name}</p>
      <p className="text-center text-lg text-white text-opacity-90">
        {position}
      </p>
    </div>
  );
};

export default TeamMember;
