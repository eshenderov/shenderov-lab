import DOMPurify from "dompurify";
import ButtonLink from "./ButtonLink";

interface Author {
  name: string;
  authtype: string;
  clusterid: string;
}

interface Props {
  title: string;
  uid: string;
  pubdate: string;
  journal: string;
  authors: Author[];
}

const Publication = ({ title, uid, pubdate, journal, authors }: Props) => {
  const createTitleMarkup = () => {
    return {
      __html: DOMPurify.sanitize(title, { USE_PROFILES: { html: true } }),
    };
  };

  return (
    <li className="flex gap-12 text-sm sm:text-base">
      <a
        className="w-full sm:pointer-events-none"
        href={`https://pubmed.ncbi.nlm.nih.gov/${uid}`}
      >
        <div className="w-full">
          <p
            className="font-bold"
            //  eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={createTitleMarkup()}
          />
          <p>{pubdate}</p>
          <p>{journal}</p>
          <p>
            {authors.map(({ name }, i) => (
              <span
                className={name === "Shenderov E" ? "font-extrabold" : ""}
                key={name}
              >
                {name + (i < authors.length - 1 ? ", " : "")}
              </span>
            ))}
          </p>
        </div>
      </a>
      <ButtonLink
        className="hidden xl:flex"
        href={`https://pubmed.ncbi.nlm.nih.gov/${uid}`}
      />
    </li>
  );
};

export default Publication;
