import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import Gallery from "./Gallery";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section id="team">
      <h2 className="pb-8 text-center text-6xl font-black text-sky">
        Meet The&nbsp;
        <span className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text text-transparent">
          Team
        </span>
      </h2>
      <div className="flex flex-wrap justify-center pb-8">
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
        <TeamMember name="Alex" position="Alex" src="/alex.jpg" />
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <Gallery />
        <article className="flex w-full flex-col justify-between gap-12 sm:gap-4 lg:w-2/5">
          <div>
            <h3 className="pb-2 text-2xl font-medium text-peach">
              We have a lot of fun here...
            </h3>
            <span className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              fuga obcaecati error laborum aperiam quod delectus aliquam
              aliquid, dolor voluptatem.
            </span>
          </div>
          <motion.div className="flex items-center justify-end gap-4 text-2xl font-medium text-peach">
            <p>Join us</p>
            <ButtonLink className="flex" href="mailto:TODO" />
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;
