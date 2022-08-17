import React from "react";
import Gallery from "./Gallery";

const TeamSection: React.FC = () => {
  return (
    <section id="team">
      <h2 className="text-center text-6xl pb-8 font-black text-sky">
        Meet The&nbsp;
        <span className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text text-transparent">
          Team
        </span>
      </h2>
      <div className="pb-8"></div>
      <div className="flex flex-col gap-12 lg:flex-row">
        <Gallery />
        <article className="">
          <h3 className="pb-2 text-2xl font-medium text-peach">
            We have a lot of fun here...
          </h3>
          <span className="text-white text-opacity-75">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quidem
            aliquam dolorem. Eum error qui nostrum magni quisquam possimus
            expedita excepturi ad? Eaque, sequi aspernatur! A animi aut commodi
            voluptatibus?
          </span>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;
