// import TeamMember from "./TeamMember";

import TeamMember from "./TeamMember";

const AlumniSection = () => {
  return (
    <section id="team">
      <h2 className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-12 text-center font-sans text-5xl font-black text-transparent sm:text-6xl lg:pb-24">
        Lab Alumni Family
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* add alumni here. top to bottom in code equates to left to right, top to bottom in the website */}
        {/* notice the / before the file name instead of the expected public/FILE_NAME */}
        <TeamMember name="Ingharan Siddarthan" src="/inghu.png">
          Ingharan (Inghu) Siddarthan was a member of the lab from June 2018
          until May 2021. He worked with Dr. Sidholm, Dr. Shenderov, and others
          to ascertain the utility of deep learning methods to aid in the rapid
          diagnosis of acute promyelocytic leukemia (APL). After graduating from
          Johns Hopkins School of Medicine in 2021, Inghu began residency
          training at Weill Cornell Medicine / NewYork-Presbyterian Hospital in
          Anesthesiology. Inghu&apos;s current research interests include the
          applications of virtual reality (VR) in education of procedures in
          anesthesia and interventional pain, and exploring the utility of POCUS
          in risk-stratification of patients receiving general anesthesia. He
          enjoys concerts, cooking, and basketball.
        </TeamMember>
      </div>
    </section>
  );
};

export default AlumniSection;
