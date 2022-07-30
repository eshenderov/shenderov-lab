import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";
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
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
