import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import ResearchImage from "./ResearchImage";

// array of paths to images
// left to right is the order in which the images are displayed when the page is scrolled downwards
const researchImages = ["/alex.jpg", "/logo.png"];

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
      <h2>Research</h2>
      <div ref={ref} className="grid grid-cols-2 gap-16">
        <div className="">
          <div className="flex h-screen items-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            praesentium ad alias aliquid vero est laborum architecto nisi qui
            harum modi nulla quod, amet provident? Asperiores doloribus
            voluptates ab harum!
          </div>
          <div className="flex h-screen items-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            ipsum ut fuga at soluta sapiente rem officia amet voluptatibus
            accusamus, exercitationem omnis ullam assumenda numquam deleniti
            iusto magni est officiis.
          </div>
          <div className="flex h-screen items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repudiandae excepturi dolor sequi, magnam quisquam quas tenetur
            praesentium, aperiam rem laudantium eius vel impedit obcaecati
            dignissimos enim magni debitis quos?
          </div>
        </div>
        <div className="sticky top-0 h-screen">
          <div className="relative h-full">
            {researchImages.map((src, i) => (
              <ResearchImage
                src={src}
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
