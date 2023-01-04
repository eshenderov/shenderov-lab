import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import ResearchImage from "./ResearchImage";
import ResearchText from "./ResearchText";

interface Image {
  src: string;
  alt: string;
}

// left to right is the order in which the images are displayed when the page is scrolled downwards
const researchImages: Image[] = [
  { src: "/alex.jpg", alt: "Alex looking at something" },
  { src: "/favicon.png", alt: "Shenderov Lab Logo" },
];

const breakpoint = 1 / researchImages.length;

const ResearchSection = () => {
  const [y, setY] = useState(0);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setY(latest);
    });
  }, [scrollYProgress]);

  return (
    <section id="research" className="relative lg:-my-[12rem]">
      <div
        ref={containerRef}
        className="sticky flex flex-col-reverse gap-16 lg:relative lg:grid lg:grid-cols-2"
      >
        <div>
          {/* TODO: hack cursor and make title follow https://medium.com/@jaredloson/custom-javascript-cursor-in-react-d7ffefb2db38 */}
          <ResearchText>
            The Shenderov Lab focuses on the elucidation of the mechanisms of
            immune resistance and response to immunotherapy in Prostate Cancer.
            This has led to clinical and basic research investigating the
            presumptive checkpoint inhibitor B7-H3.
          </ResearchText>
          <ResearchText>
            In pursuit of understanding biomarkers and regulatory molecules of
            immune response, we utilize artificial intelligence, immunogenomics,
            spatial proteomics, transcriptomics, and clinical trial correlative
            samples.
          </ResearchText>
        </div>
        <div className="sticky top-0 h-screen">
          <div className="relative h-full">
            {researchImages.map(({ src, alt }, i) => (
              <ResearchImage
                src={src}
                alt={alt}
                show={y >= breakpoint * i && y <= breakpoint * (i + 1)}
                key={src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
