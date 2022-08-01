import { useEffect, useState } from "react";
import axios from "axios";

const PublicationsSection: React.FC = () => {
  const [publications, setPublications] = useState(null);
  const [sort, setSort] = useState("PLACEHOLDER");

  useEffect(() => {
    // look into usehistory and sort parameters, response format in efetch, db=pmc vs pubmed
    (async () => {
      const exampleIDSearch = await axios.get(
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=Shenderov%20E&retmode=json"
      );

      console.log(exampleIDSearch);

      // const IDList = exampleIDSearch.data.esearchresult.idlist;
      // const exampleDetailsSearch = await axios.get(
      //   `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${IDList}&retmode=`
      // );

      // console.log(exampleDetailsSearch);
    })();
  }, []);

  return (
    <section id="publications" className="w-screen h-screen">
      <h2>Publications</h2>
      {/* {publications.map((publication, i) => )} */}
    </section>
  );
};

export default PublicationsSection;
