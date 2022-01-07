import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel title="Latest Products" />
      <Card />
      <Carousel title="Men Fashion" />
      <Footer />
    </>
  );
}

export default Home;
