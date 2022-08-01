import React from "react";
import Slideshow from "./Slideshow";

const TeamSection: React.FC = () => {
  // responsiveness: if needed maybe set % width and aspect, use object fit
  return (
    <section id="team" className="h-screen">
      <h2>Team</h2>
      <Slideshow />
    </section>
  );
};

export default TeamSection;
