import { useState } from "react";
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
  const [page, setPage] = useState(0);

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

  const totalPages = idlist ? Math.ceil(idlist.length / perPage) : 0;
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;

  return (
    <section id="publications">
      <h2 className="inline-block bg-gradient-to-r from-logo-invert to-green-apple bg-clip-text pb-8 text-5xl font-bold text-transparent">
        Publications
      </h2>
      <div className="flex h-[36rem] flex-col justify-between gap-4 rounded-2xl bg-peach p-8">
        {isSearchError || isSummaryError ? (
          "Error retrieving publication data from PubMed, please try again later."
        ) : (
          <ul className="flex h-full flex-col gap-4 overflow-y-auto">
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
        <div className="flex h-6 items-center justify-center gap-4">
          <button
            className="disabled:INSERTBGGREYDISABLEODCOLORTHING aspect-square h-full"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!idlist || page === 0}
          >
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </button>
          <button
            className="disabled:INSERTBGGREYDISABLEODCOLORTHING aspect-square h-full"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!idlist || page === totalPages - 1}
          >
            <svg className="h-full" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
