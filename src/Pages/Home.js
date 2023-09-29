// import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Categories from "../component/Categories";
import "./Home.css";
import Footer from "../component/Footer";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./../Firebase/FirebaseConfig";
import Slider from "./../component/Slider";
import Cards from "./../component/Cards";
import Cards2 from "./../component/Cards2";
import Cards3 from "./../component/Cards3";

const Home = ({ products }) => {
  return (
    <div className="main">
      <Navbar />
      <Categories />
      <Slider />
      <Cards />
      <Cards2 />

      <Cards3 products={products} category="computer" />
      <Cards3 products={products} category="laptop" />
      <Cards3 products={products} category="moniter" />
      <Cards3 products={products} category="ram" />
      <Cards3 products={products} category="ssd" />
      <Cards3 products={products} category="processor" />
      <Cards3 products={products} category="barebone" />
      <Footer />
    </div>
  );
};

export default Home;
