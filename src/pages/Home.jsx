import React from "react";
import DogCard from "../components/DogCard";
import HomeSlider from "../components/HomeSlider";
import CompanyList from "../components/CompanyList";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CompanyList />
      {/* <DogCard /> */}
    </div>
  );
};

export default Home;
