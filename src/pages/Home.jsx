import React from "react";
import DogCard from "../components/DogCard";
import HomeSlider from "../components/HomeSlider";
import CompanyList from "../components/CompanyList";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <CompanyList />
      <FeaturedProducts />
      {/* <DogCard /> */}
    </>
  );
};

export default Home;
