import type { NextPage } from "next";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  // TODO: use ref.current.scrolltop to transition rgb values for bg color
  // [r/g/b]Diff = rgb1 - rgb2
  // bg = rgb1 + (rgbDiff * (scrollposend - scrollposcur / scrollposend - scrollposstart))
  return (
    <div className="bg-raisin">
      <NavBar />
      <main>
        <FrontSection />
        <ResearchSection />
        <TeamSection />
        <NewsSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
