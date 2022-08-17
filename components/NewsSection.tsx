import NewsBlock from "./NewsBlock";

const NewsSection = () => {
  return (
    <section id="news" className="">
      <h2 className="inline-block bg-gradient-to-r from-logo-invert to-green-apple bg-clip-text pb-8 text-5xl font-bold text-transparent">
        News
      </h2>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        <NewsBlock headline="test"></NewsBlock>
        <NewsBlock headline="test"></NewsBlock>
        <NewsBlock headline="test"></NewsBlock>
      </div>
    </section>
  );
};

export default NewsSection;
