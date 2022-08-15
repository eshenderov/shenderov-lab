import React, { PropsWithChildren } from "react";

interface Props {
  headline: string;
}
const NewsBlock: React.FC<PropsWithChildren<Props>> = ({
  headline,
  children,
}) => {
  return (
    <div className="max-h-full rounded-lg bg-peach px-8 py-4">
      <h3 className="text-lg">{headline}</h3>
      {children}
    </div>
  );
};

export default NewsBlock;
