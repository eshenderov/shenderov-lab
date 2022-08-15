import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between py-8 px-8 text-center text-white sm:px-32 xl:px-48">
      <div>
        <p className="pb-4">exmaple@exmaple.com</p>
        <p>© Shenderov Lab 2022</p>
      </div>
      <div className="flex gap-4">
        <div>icon</div>
        <div>icon</div>
        <div>icon</div>
      </div>
    </footer>
  );
};

export default Footer;
