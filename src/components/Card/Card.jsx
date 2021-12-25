import React, { useState, useEffect } from "react";

import "./Card.css";
import axios from "axios";

function Card() {
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

  return (
    <>
      <div className="product-wrapper">
        {GetData.map((product) => (
          <div className="product-card card" key={product.id}>
            <div className="product-img">
              <img
                src={product.urlToImage}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
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
