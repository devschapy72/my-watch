import React from "react";
import Hero from "./Hero";
import TrastedBrand from "../trasted_brand/TrastedBrand";
import FeatureProduct from "./FeatureProduct";

const Home = () => {
  return (
    <div className="-translate-y-10">
      <Hero />
      <TrastedBrand />
      <FeatureProduct />
    </div>
  );
};

export default Home;
