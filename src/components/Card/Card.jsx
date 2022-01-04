import React, { useState, useEffect } from "react";
import "./Card.css";

import axios from "axios";
import Heading from "../Heading/Heading";

function Card() {
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

  return (
    <>
      <Heading title="Women Fashion" />
      <div className="product-wrapper">
        {GetData.map((product) => (
          <div className="product-card card" key={product.id}>
            <div className="product-card-img">
              <img src={product.urlToImage} alt="" className="product-img" />
            </div>
            <div className="product-name">{product.title}</div>
            <div className="product-bottom">
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="product-view-detail-button">
                <a href="https://google.com">
                  <button className="btn btn-primary">View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
