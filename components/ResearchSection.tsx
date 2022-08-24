import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const ResearchSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
  }, []);

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
            <div className="absolute top-0 bottom-0 my-auto aspect-video w-full rounded-2xl bg-logo"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
