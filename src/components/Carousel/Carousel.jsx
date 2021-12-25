import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "../Carousel/Carousel.css";

const Carousel = () => {
  const [GetData, setData] = useState([0]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-25&sortBy=publishedAt&apiKey=cc40a50d7bbd4994943164327dfe8180"
    );

    console.log(data.articles);
    setData(data.articles);
  };

  useEffect(() => {
    getData();
  }, [0]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        {GetData.map((product) => (
          <div className="carousel-product-card card" key={product.id}>
            <div className="carouse-product-img">
              <img
                src={product.urlToImage}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="carousel-product-name">{product.title}</div>
            <div className="carousel-product-bottom">
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="carousel-product-view-detail-button">
                <a href="https://google.com">
                  <button className="btn btn-primary">View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
