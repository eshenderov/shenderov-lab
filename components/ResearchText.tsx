interface Props {
  children: string;
}

const ResearchText = ({ children }: Props) => {
  return (
    <div className="flex items-center h-[110vh] text-xl text-green-apple">
      {children}
    </div>
  );
};

export default ResearchText;
