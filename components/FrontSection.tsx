import Image from "next/image";

const FrontSection = () => {
  return (
    <section id="front" className="relative h-screen">
      <Image src="/spatial.jpg" alt="placeholder" layout="fill" objectFit="cover" />
      <h1 className="inline-block text-peach pb-12 text-4xl font-black sm:text-6xl z-50">
        Shenderov Lab
      </h1>
    </section>
  );
};

export default FrontSection;
