import React, { PropsWithChildren } from "react";

interface Props {
  headline: string;
  date: string;
}

const NewsBlock: React.FC<PropsWithChildren<Props>> = ({
  headline,
  date,
  children,
}) => {
  return (
    <div className="max-h-full rounded-2xl">
      <h3 className="text-2xl font-medium text-peach">{headline}</h3>
      <p className="pb-2 text-peach">{date}</p>
      <p className="text-white">{children}</p>
    </div>
  );
};

export default NewsBlock;
