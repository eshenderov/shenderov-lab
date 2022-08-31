interface Props {
  children: string;
}

const ResearchText = ({ children }: Props) => {
  return (
    <div className="flex h-screen items-center text-xl text-green-apple">
      {children}
    </div>
  );
};

export default ResearchText;
