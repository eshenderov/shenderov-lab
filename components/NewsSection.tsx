import NewsBlock from "./NewsBlock";

const NewsSection = () => {
  return (
    <section id="news">
      <h2 className="inline-block bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-8 text-5xl font-extrabold text-transparent">
        News
      </h2>
      <div className="grid gap-12 lg:grid-cols-2 2xl:grid-cols-3">
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
        <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          oluptatum voluptatem aperiam? Quisquam, maiores animi alias aspernatur
          voluptates, cumque rerum qui velit perspiciatis saepe possimus? Velit,
          necessitatibus.
        </NewsBlock>
      </div>
    </section>
  );
};

export default NewsSection;
