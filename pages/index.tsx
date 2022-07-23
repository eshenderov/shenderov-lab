import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Test = dynamic(() => import("../components/test"), {ssr: false})

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Test></Test>
    </div>
  );
};

export default Home;
