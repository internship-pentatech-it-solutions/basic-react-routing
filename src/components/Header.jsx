import React from "react";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="bg-[#f40000] fixed top-0 left-0 z-[99] w-full">
      <TopNav />
      <Navbar />
    </header>
  );
};

export default Header;
