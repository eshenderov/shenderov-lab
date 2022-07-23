import { useRef, useEffect } from "react";

const Test = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.display = "block !important";
      console.log(ref.current.style.display);
    }
  }, []);

  return (
    <iframe
      ref={ref}
      src="https://scholar.google.com/citations?user=YarQeqEAAAAJ&hl=en"
      style={{ display: "block !important" }}
      width="200"
      height="200"
    ></iframe>
  );
};

export default Test;
