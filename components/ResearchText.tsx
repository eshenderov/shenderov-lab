interface Props {
  header: string;
  children: string;
}

// TODO: dont know if header is needed
// increase height for longer scroll time
const ResearchText = ({ header, children }: Props) => {
  return <div className="flex h-screen items-center">{children}</div>;
};

export default ResearchText;
