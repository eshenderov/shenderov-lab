import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const ResearchSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // TODO: will prob look weird but i dont feel like messing with this anymore today
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
  }, []);

  return (
    <section ref={ref} id="research" className="relative">
      <h2>Research</h2>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
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
