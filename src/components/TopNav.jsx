import { useState } from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/images/wsports.jpg";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const TopNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };
  return (
    <div className="custom-width py-8">
      <div className="flex justify-between items-center flex-wrap">
        <button className="z-50 lg:hidden" onClick={handleMenuOpen}>
          <FaBars className="text-white text-2xl" />
        </button>

        <img src={Logo} alt="logo" className="w-[80px]" />
        <Navbar />
        <LiaPhoneVolumeSolid className="text-4xl text-white" />
      </div>

      {openMenu && <MobileNav />}
    </div>
  );
};

export default TopNav;
