import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProductDetail from "../ProductDetail/ProductDetail";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

function Details() {
  return (
    <>
      <Header />
      <Navbar />
      <ProductDetail />
      <Carousel title="More Products" />
      <Footer />
    </>
  );
}

export default Details;
