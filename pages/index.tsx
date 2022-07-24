import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <TeamSection />
        <PublicationsSection />
        <ResearchSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
