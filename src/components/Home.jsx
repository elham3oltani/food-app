import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Food from "./Food";
import Categories from "./Categories";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
