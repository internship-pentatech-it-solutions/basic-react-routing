import React from "react";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="bg-[#f40000]">
      <TopNav />
      <Navbar />
    </header>
  );
};

export default Header;
