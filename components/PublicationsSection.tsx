import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Publication from "./Publication";

interface GetSearchResponse {
  esearchresult: {
    idlist: string[];
  };
}

interface Author {
  name: string;
  authtype: string;
  clusterid: string;
}

interface ESummaryResult {
  title: string;
  uid: string;
  pubdate: string;
  source: string;
  authors: Author[];
}

interface SummaryResultPublications {
  result: {
    [key: string]: ESummaryResult;
  };
}

interface SummaryResultUIDs {
  result: {
    uids: string[];
  };
}

type GetSummaryResponse = SummaryResultPublications & SummaryResultUIDs;

const fetchESearch = async (): Promise<string[] | undefined> => {
  const res = await axios.get<GetSearchResponse>(
    "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi",
    {
      params: {
        db: "pubmed",
        term: "Shenderov+E[author]",
        retmode: "json",
      },
    }
  );

  return res.data.esearchresult.idlist;
};

const fetchESummary = async (idlist: string[]): Promise<ESummaryResult[]> => {
  const {
    data: { result },
  } = await axios.get<GetSummaryResponse>(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi`,
    {
      params: {
        db: "pubmed",
        id: idlist.join(","),
        retmode: "json",
      },
    }
  );

  const data = result.uids.reduce(
    (acc: ESummaryResult[], cur: string) => [...acc, result[cur]],
    []
  );

  return data;
};

const PublicationsSection: React.FC = () => {
  // need api key https://www.ncbi.nlm.nih.gov/books/NBK25497/ (default limit 3/sec)
  const { data: idlist } = useQuery(["esearch"], fetchESearch);

  const { data: publications } = useQuery(
    ["esummary", idlist],
    () => fetchESummary(idlist!),
    {
      enabled: !!idlist,
    }
  );

  return (
    <section id="publications" className="">
      <h2 className="bg-gradient-to-r inline-block bg-clip-text from-dragonfruit to-peach text-5xl pb-8 font-bold text-transparent">
        Publications
      </h2>
      <div className="h-[36rem] rounded-2xl bg-peach p-8">
        <ul className="flex h-full flex-col gap-4 overflow-y-scroll">
          {publications?.map(({ title, uid, pubdate, source, authors }) => (
            <Publication
              title={title}
              uid={uid}
              pubdate={pubdate}
              journal={source}
              authors={authors}
              key={uid}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationsSection;
