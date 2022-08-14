import React, { PropsWithChildren } from "react";

interface Props {

}
// TODO: ask put pubs in citation format? hard code months? (originally truncated to 3 letters, journals not as simple)
const NewsBlock: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <div className="">{children}</div>;
};

export default NewsBlock;
