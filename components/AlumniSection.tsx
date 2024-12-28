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
        <TeamMember name="Ling Huang" src="/ling.jpg">
          Ling was a resident at the Osler Medical Residency, aspiring to
          join the field of hematology/oncology. She enjoys cooking, learning to
          knit and going on walks with her family on the beautiful waterfront in
          Baltimore.
        </TeamMember>
        <TeamMember name="John-William Sidhom" src="/john.jpg">
          John was working part-time with the lab and now he is a clinical 
          fellow in hematology & oncology at Weill Cornell Medicine, 
          NewYork-Presbyterian Hospital.
        </TeamMember>
        <TeamMember name="Bo-Shiun Lai" src="/Bo Shiun Lai.jpg">
          Bo-shiun was in the lab for the APL publication as a medical student. Now
          Dr. Bo-Shiun Lai is a physician-scientist based in Vancouver, British Columbia.
          His clinical work includes general family medicine, HIV & hepatitis C management 
          in primary care, and treatment of menopause symptoms.
        </TeamMember>
        <TeamMember name="Aushna Saleem" src="/aushna.jpg">
          Aushna was a Brooklyn College Garil Scholarship Summer Student in 2021. 
          Presently she is in SUNY Downstate Medical School.
        </TeamMember>
        <TeamMember name="David Ibragimov" src="/david_ibragimov.jpg">
        David Ibragimov is a dedicated researcher with a strong interest in oncology, 
        inspired by his personal experiences and family history. During his two internships 
        in the Shenderov Lab at Johns Hopkins, David contributed to projects focused on 
        leveraging AI tools to differentiate between acute promyelocytic leukemia (APL) 
        and acute myeloid leukemia (AML). He is passionate about combining clinical medicine 
        and research to improve patient care, a vision shaped by his experiences working 
        closely with Dr. Eugene Shenderov and observing his exemplary professionalism and 
        kindness. David holds a bachelor’s degree in biology and aspires to become a physician-scientist, 
        further advancing the field of oncology through research and innovation.
        </TeamMember>
        <TeamMember name="Devorah Scheinfeld" src="/scientist.jpg">
          Devorah Scheinfeld was a pre-med Brooklyn College Garil Scholarship Summer Student in 2023.
        </TeamMember>
        <TeamMember name="David Pare" src="/scientist.jpg">
          David Pare was a Brooklyn College Garil Scholarship Summer Student in 2024. 
          He was interested in pursuing Medical Physics PhD.
        </TeamMember>
      </div>
    </section>
  );
};

export default AlumniSection;
