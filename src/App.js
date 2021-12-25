import React from "react";
import Header from "../src/components/Header/Header";
import Carousel from "../src/components/Carousel/Carousel";
import Card from "../src/components/Card/Card";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Card />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
