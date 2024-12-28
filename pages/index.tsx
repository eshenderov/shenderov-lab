import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AlumniSection from "../components/AlumniSection";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import NavBar from "../components/NavBar";
import NewsSection from "../components/NewsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";
import NewsArchiveSection from "../components/NewsArchiveSection";
import DonationSection from "../components/DonationSection";

const Home: NextPage = () => {
  const [y, setY] = useState(0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setY(latest);
    });
  }, [scrollYProgress]);

  return (
    <>
      <Head>
        <title>Shenderov Lab</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="The Shenderov Lab, headed by Dr. Eugene Shenderov, focuses on the elucidation of the mechanisms of immune resistance and response to immunotherapy in Prostate Cancer. This has led to clinical and basic research investigating the presumptive checkpoint inhibitor B7-H3. In pursuit of understanding biomarkers and regulatory molecules of immune response, we utilize artificial intelligence, immunogenomics, spatial proteomics, transcriptomics, and clinical trial correlative samples."
        />
      </Head>
      <div className="bg-raisin">
        <NavBar />
        <div
          ref={containerRef}
          style={{ opacity: 1 - y }}
          className="absolute top-0 left-0 h-screen w-screen"
        >
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
          <AlumniSection />
          <NewsSection />
          <NewsArchiveSection/>
          <PublicationsSection />
          <DonationSection/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
