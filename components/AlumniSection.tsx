import TeamMember from "./TeamMember";

const AlumniSection = () => {
  return (
    <section id="team">
      <h2 className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-12 text-center font-sans text-6xl font-black text-transparent text-green-apple lg:pb-24">
        Lab Alumni Family
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* add alumni here. top to bottom in code equates to left to right, top to bottom in the website */}
        {/* notice the / before the file name instead of the expected public/FILE_NAME */}
        <TeamMember name="Alex" src="/alex.jpg">
          <p>Member 2018-2021</p>
          <p>Currently student at River Hill High School</p>
        </TeamMember>
      </div>
    </section>
  );
};

export default AlumniSection;
