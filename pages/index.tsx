import { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

// TODO: shrink image and translate to right middle on initial scroll
const Home: NextPage = () => {
  return (
    <div className="bg-raisin">
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-screen">
        <Image
          src="/spatial.jpg"
          alt="placeholder"
          layout="fill"
          objectFit="cover"
        />
      </div>
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
