import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  return (
    <div className="">
      <NavBar />
      <main>
        <TeamSection />
        <PublicationsSection />
        <ResearchSection />
        <NewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
