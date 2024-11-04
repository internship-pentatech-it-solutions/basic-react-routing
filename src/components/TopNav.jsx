import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import Logo from "../assets/images/wsports.jpg";
import SearchBar from "./SearchBar";

const TopNav = () => {
  return (
    <div className="custom-width py-8">
      <div className="flex justify-between items-center flex-wrap">
        <div className="lg:hidden">
          <button>
            <FaBars className="text-white text-2xl" />
          </button>
        </div>
        <img src={Logo} alt="logo" className="w-[80px]" />
        <div className="hidden lg:block">
          <SearchBar />
        </div>
        <LiaPhoneVolumeSolid className="text-4xl text-white" />
      </div>
      <div className="flex justify-center lg:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default TopNav;
