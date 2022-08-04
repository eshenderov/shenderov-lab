import React from "react";

interface Props {
  title: string;
  uid: string;
  pubdate: string;
  journal: string;
  authors: string[];
}

const Publication: React.FC<Props> = ({
  title,
  uid,
  pubdate,
  journal,
  authors,
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{uid}</p>
      <p>{pubdate}</p>
      <p>{journal}</p>
      <p>{JSON.stringify(authors)}</p>
    </div>
  );
};

export default Publication;
