"use client";
import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import React, { useState } from "react";
import Pricing from "@/components/front-end/Pricing";
import Title from "@/components/front-end/Title";
import Advertistment from "@/components/front-end/Advertistment";


const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
      <Pricing />
      <Advertistment />
      <Title />
      <Footer />
    </main>
  );
};

export default Home;
