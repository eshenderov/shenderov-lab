interface Props {
  children: string;
}

// increase height for longer scroll time
const ResearchText = ({ children }: Props) => {
  return <div className="flex h-[150vw] items-center">{children}</div>;
};

export default ResearchText;
