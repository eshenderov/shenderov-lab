import NewsBlock from "./NewsBlock";

const NewsSection = () => {
  return (
    <section id="news">
      <h2 className="inline-block bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-12 text-5xl font-black text-transparent sm:text-6xl">
        News
      </h2>
      <style>
        {`
          /* Custom scrollbar for Webkit browsers (Chrome, Safari, Edge) */
          .scrollable-container::-webkit-scrollbar {
            height: 8px;
          }

          .scrollable-container::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .scrollable-container::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 8px;
          }

          .scrollable-container::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
      <div className="scrollable-container overflow-x-auto max-w-full">
        <div className="flex gap-12">
          {/* add news blocks inside here. top to bottom in code equates to left to right, top to bottom in the website. */}
          {/* <NewsBlock headline="This is a headline woohoo" date="August 18, 2022">
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
          </NewsBlock> */}
          <NewsBlock headline="Dr. Ling Huang Matches to Oncology Fellowship" date="November 30, 2022">
            Dr. Huang is heading to Wash. U. in St. Louis! Congratulations!
          </NewsBlock>
          </div>
      </div>
    </section>
  );
};

export default NewsSection;
