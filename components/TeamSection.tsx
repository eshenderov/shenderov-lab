import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import Gallery from "./Gallery";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section id="team">
      <h2 className="pb-12 text-center font-outline text-6xl font-black text-green-apple sm:text-[4rem] lg:pb-24">
        <span className="text-[4.25rem]">Meet The&nbsp;</span>
        <span className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text font-sans text-transparent">
          Team
        </span>
      </h2>
      <div className="flex flex-wrap justify-center pb-12 lg:pb-24">
        {/* add team members inside here. top to bottom in code equates to left to right, top to bottom in the website */}
        {/* notice the / before the file name instead of the expected public/FILE_NAME */}

        <TeamMember name="Kelly Casella" src="/kelly.jpg">
          Kelly is a research technologist working closely with the GeoMx
          Digital Spatial Profiler for spatial transcriptomics and proteomics.
          She is currently pursuing a Master’s degree in Biotechnology with a
          concentration in Molecular Targets and Drug Discovery Technologies
          from Johns Hopkins University. In her spare time, she enjoys caring
          for her house plants.
        </TeamMember>
        <TeamMember name="Pan Gu" src="/pan.jpg">
          Pan has just graduated from Hopkins and hopes to gain more research
          experience before pursuing PhD. She likes dancing and photography.
        </TeamMember>
        <TeamMember name="Adam Luo" src="/adam.jpg">
          Adam is currently a postbac fellow at the NIH while continuing to work in the 
          Shenderov Lab as a part-time technician. He specializes in the analysis of spatial datasets, 
          and has previously completed a master’s thesis in glioblastoma spatial biology. 
          Outside of the lab, he enjoys the gym, going on long runs, and pickleball.
        </TeamMember>
        <TeamMember name="Nikita Mundhara" src="/nikita.jpg">
          Dr. Mundhara is a postdoctoral fellow elucidating the B7-H3 signaling
          pathway, involving spatial transcriptomics and CRISPR knockouts in
          prostate cancer cell lines and mouse models. Her Ph.D. encompasses the
          intricate crosstalk between actin and microtubules in cell physiology
          and mechanobiology. Other interests include graphology, poetry
          writing, and podcasting.
        </TeamMember>
        <TeamMember name="Jeffrey Schneider" src="/Jeff.jpg">
        Jeff is currently an internal medicine resident at Johns Hopkins Bayview. 
        He plans to become a medical oncologist and is interested in focusing 
        clinically on patients with prostate cancer while developing targeted cancer 
        therapeutics in the laboratory.
        </TeamMember>
        <TeamMember name="Tommy Wu" src="/tommy.jpg">
        Tommy is currently a second-year JHU undergrad hoping to major in biophysics. He joined the lab during freshman.
        He is interested in projects involving spatial biology and immunology and hopes 
        to gain wet lab experience. In his free time, he enjoys watching soccer and tennis, 
        reading, and playing chess.
        </TeamMember>
        <TeamMember name="Shivang Sharma" src="/shivang.jpg">
          placeholder
        </TeamMember>
        <TeamMember name="Eugene Shenderov" src="/eugene.png">
          Dr. Shenderov is a physician-scientist educated at University of
          Oxford, Johns Hopkins School of Medicine, and the National Institutes
          of Health (NIH), who is striving to develop the next generation of
          prostate cancer-directed immunotherapies and helping shape policy to
          allow the best possible healthcare for all. He is honored to have the
          opportunity to balance patient care, run clinical trials, and lead a
          wet/computational laboratory. In his spare time, he enjoys spending
          time with his wife and three children, along with outdoor hobbies
          including gardening, running, cycling, and tennis.
        </TeamMember>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <Gallery />
        <article className="flex w-full flex-col justify-between gap-12 sm:gap-4 lg:w-2/5">
          <div>
            <h3 className="pb-2 text-2xl font-medium text-green-apple">
              We have a lot of fun here...
            </h3>
            <span className="text-white">
              We keep our team at the center of what we do, striving to foster a
              welcoming educational and professional environment.
            </span>
          </div>
          <motion.div className="flex items-center justify-end gap-4 text-2xl font-medium text-green-apple">
            <p>Join us!</p>
            <ButtonLink
              className="flex"
              href="mailto:Eugene.Shenderov@jhmi.edu"
            />
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;
