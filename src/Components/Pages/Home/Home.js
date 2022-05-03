import React from "react";
import Banner from "./Banner/Banner";
import OurProducts from "./OurProducts/OurProducts";
import Reviews from "./Reviews/Reviews";
import Subscriber from "./Subscriber/Subscriber";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <Reviews></Reviews>
      <Subscriber></Subscriber>
    </div>
  );
};

export default Home;
