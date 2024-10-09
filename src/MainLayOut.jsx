import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const MainLayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayOut;
