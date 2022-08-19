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
    <div className="max-h-full rounded-2xl bg-peach px-8 py-6">
      <h3 className=" text-xl">{headline}</h3>
      <p className="pb-2">{date}</p>
      <p className="text-raisin text-opacity-90">{children}</p>
    </div>
  );
};

export default NewsBlock;
