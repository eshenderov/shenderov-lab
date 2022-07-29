import { useEffect } from "react";
import axios from "axios";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PublicationsSection from "../components/PublicationsSection";
import ResearchSection from "../components/ResearchSection";
import TeamSection from "../components/TeamSection";

const Home: NextPage = () => {
  useEffect(() => {
    // look into usehistory and sort parameters, response format in efetch, db=pmc vs pubmed
    (async () => {
      const exampleIDSearch = await axios.get(
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=Shenderov%20E&retmode=json"
      );

      console.log(exampleIDSearch);

      const IDList = exampleIDSearch.data.esearchresult.idlist;
      const exampleDetailsSearch = await axios.get(
        `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${IDList}&retmode=`
      );

      console.log(exampleDetailsSearch);
    })();
  }, []);

  return (
    <div className="">
      <NavBar />
      <main>
        <TeamSection />
        <PublicationsSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
