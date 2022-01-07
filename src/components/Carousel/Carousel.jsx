import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "../Carousel/Carousel.css";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";

const Carousel = (props) => {
  const [GetData, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-25&to=2021-12-25&sortBy=popularity&apiKey=cc40a50d7bbd4994943164327dfe8180"
    );

    console.log(data.articles);
    setData(data.articles);
  };

  useEffect(() => {
    getData();
  }, []);

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
    <>
      <Heading title={props.title} />
      <div
        style={{ marginLeft: "20px", marginRight: "20px" }}
        className="carousel"
      >
        <Slider {...settings}>
          {GetData.map((product) => (
            <div className="carousel-product-card " key={product.id}>
              <div className="carousel-product-img">
                <img
                  src={product.urlToImage}
                  alt=""
                  style={{ width: "300px", height: "230px" }}
                />
              </div>
              <div className="carousel-product-name">
                <Link to={"/productdetails"}>{product.title}</Link>
              </div>

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
    </>
  );
};

export default Carousel;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div
//         className="slider"
//         style={{ marginLeft: "20px", marginRight: "20px" }}
//       >
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
