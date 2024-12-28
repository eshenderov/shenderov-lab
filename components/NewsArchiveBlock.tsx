interface Props {
  headline: string;
  date: string;
  children: string;
}

const NewsArchiveBlock = ({ headline, date, children }: Props) => {
  return (
    <div className="max-h-full rounded-2xl">
      <h3 className="text-2xl font-medium text-green-apple">{headline}</h3>
      <p className="pb-2 text-green-apple">{date}</p>
      <p className="text-white">{children}</p>
    </div>
  );
};

export default NewsArchiveBlock;
