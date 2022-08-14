import type { NextPage } from "next";
import FrontSection from "../components/FrontSection";
// import Footer from "../components/Footer";
import Gallery from "../components/GallerySection";
import NavBar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  return (
    <div className="bg-raisin">
      <NavBar />
      <main>
        <FrontSection />
        <TeamSection />
        <PublicationsSection />
        <ResearchSection />
        <NewsSection />
        <Gallery />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
