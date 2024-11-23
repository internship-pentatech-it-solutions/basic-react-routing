import React from "react";
import HomeSlider from "../components/HomeSlider";
import CompanyList from "../components/CompanyList";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CompanyList />
      <FeaturedProducts />
    </>
  );
};

export default Home;
