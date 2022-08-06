import React from "react";
import DOMPurify from "dompurify";

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

const Publication: React.FC<Props> = ({
  title,
  uid,
  pubdate,
  journal,
  authors,
}) => {
  const createTitleMarkup = () => {
    return {
      __html: DOMPurify.sanitize(title, { USE_PROFILES: { html: true } }),
    };
  };

  return (
    <li className="">
      <p
        className="font-semibold"
        //  eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={createTitleMarkup()}
      />
      <p>{pubdate}</p>
      <p>{journal}</p>
      <p>
        {authors.map(({ name }, i) => (
          <span
            className={name === "Shenderov E" ? "font-semibold" : ""}
            key={name}
          >
            {name + (i < authors.length - 1 ? ", " : "")}
          </span>
        ))}
      </p>
      <a href={`https://pubmed.ncbi.nlm.nih.gov/${uid}`}>
        <button>Abstract</button>
      </a>
    </li>
  );
};

export default Publication;
