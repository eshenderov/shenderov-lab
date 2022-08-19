import { useState } from "react";
import Pagination from "@mui/material/Pagination";
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

interface SummaryResult {
  title: string;
  uid: string;
  pubdate: string;
  source: string;
  authors: Author[];
}

interface SummaryResultPublications {
  result: {
    [key: string]: SummaryResult;
  };
}

interface SummaryResultUIDs {
  result: {
    uids: string[];
  };
}

type GetSummaryResponse = SummaryResultPublications & SummaryResultUIDs;

const fetchSearch = async (): Promise<string[] | undefined> => {
  const res = await axios.get<GetSearchResponse>(
    "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi",
    {
      params: {
        db: "pubmed",
        term: "Shenderov+E[author]",
        retmode: "json",
        api_key: process.env.NEXT_PUBLIC_PUBMED_API_KEY,
      },
    }
  );

  return res.data.esearchresult.idlist;
};

const fetchSummary = async (idlist: string[]): Promise<SummaryResult[]> => {
  const {
    data: { result },
  } = await axios.get<GetSummaryResponse>(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi`,
    {
      params: {
        db: "pubmed",
        id: idlist.join(","),
        retmode: "json",
        api_key: process.env.NEXT_PUBLIC_PUBMED_API_KEY,
      },
    }
  );

  const data = result.uids.reduce(
    (acc: SummaryResult[], cur: string) => [...acc, result[cur]],
    []
  );

  return data;
};

const PublicationsSection: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const perPage = 3;

  // need api key https://www.ncbi.nlm.nih.gov/books/NBK25497/ (default limit 3/sec)
  const { data: idlist, isError: isSearchError } = useQuery(
    ["search"],
    fetchSearch
  );

  const { data: publications, isError: isSummaryError } = useQuery(
    ["summary", idlist],
    () => fetchSummary(idlist!),
    {
      keepPreviousData: true,
      enabled: !!idlist,
    }
  );

  const pageCount = idlist ? Math.ceil(idlist.length / perPage) : 0;
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    selectedPage: number
  ) => {
    setPage(selectedPage - 1);
  };

  return (
    <section id="publications">
      <h2 className="inline-block bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-8 text-5xl font-extrabold text-transparent">
        Publications
      </h2>
      <div className="flex h-[38rem] flex-col justify-between gap-4 rounded-2xl bg-raisin-bright p-8 text-white">
        {isSearchError || isSummaryError ? (
          "Error retrieving publication data from PubMed, please try again later."
        ) : (
          <ul className="flex h-full flex-col gap-8 overflow-y-auto">
            {publications
              ?.slice(startIndex, endIndex)
              .map(({ title, uid, pubdate, source, authors }) => (
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
        )}
        <div className="flex justify-center">
          <Pagination
            count={pageCount}
            color="primary"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
