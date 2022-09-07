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

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setY(latest);
    });
  }, [scrollYProgress]);

  return (
    <section id="research" className="relative">
      <div ref={ref} className="grid grid-cols-2 gap-16">
        <div>
          <ResearchText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            praesentium ad alias aliquid vero est laborum architecto nisi qui
            harum modi nulla quod, amet provident? Asperiores doloribus
            voluptates ab harum!
          </ResearchText>
          <ResearchText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            praesentium ad alias aliquid vero est laborum architecto nisi qui
            harum modi nulla quod, amet provident? Asperiores doloribus
            voluptates ab harum!
          </ResearchText>
          <ResearchText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            praesentium ad alias aliquid vero est laborum architecto nisi qui
            harum modi nulla quod, amet provident? Asperiores doloribus
            voluptates ab harum!
          </ResearchText>
        </div>
        <div className="sticky top-0 h-screen">
          <div className="relative h-full">
            {researchImages.map(({ src, alt }, i) => (
              <ResearchImage
                src={src}
                alt={alt}
                show={y >= breakpoint * i && y < breakpoint * (i + 1)}
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
