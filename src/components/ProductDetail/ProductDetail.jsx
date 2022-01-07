import React from "react";
import "./ProductDetail.css";
import shilpaDress from "../../images/shilpaDress.jpg";
function ProductDetail() {
  return (
    <>
      <div className="productdetail-wrapper">
        <div className="productdetail-img-block">
          <img src={shilpaDress} alt="" />
        </div>

        <div className="productdetail-block">
          <div className="productdetail-title">
            Jenny Williams ki dress.OOMPH! Women's Crepe A-Line Maxi Dress
          </div>

          <div className="productdetail-price">
            <div className="product-mrp-cart-buttons">
              <ul>
                <li className="product-mrp">
                  M.R.P.: <strike>₹12,999.00</strike>
                </li>
                <li className="CartButton ">
                  <button className="btn btn-warning ">Add To Cart</button>
                </li>
                <li className="CartButton ">
                  <button className="btn btn-success ">Buy Now</button>
                </li>
              </ul>
            </div>
            <h5>Deal of the Day:₹9,499.00</h5>
            <p className="product-discount"> You Save:₹3,500.00 (27%)</p>
          </div>

          <div className="product-size">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Size</option>
              <option value="1">XS</option>
              <option value="2">S</option>
              <option value="3">M</option>
              <option value="4">L</option>
              <option value="5">XL</option>
              <option value="6">2XL</option>
            </select>
          </div>

          <div className="productdetail-description">
            <p className="product-description">
              <ul>
                <li> Care Instructions: Hand Wash Only </li>
                <li> Fit Type: Relaxed Ankle length</li>
                <li> A-line dress with butterfly sleeves and boat neck</li>
                <li>
                  Fabric Can be be styled both as a breezy casual outfit and a
                  playful party outfit.
                </li>
                <li>
                  Garment is made with relaxed fit. Model Model is height 5'9"
                  with bust 34 and is wearing size S
                </li>
                <li>
                  Garment is made of crepe, which drapes well on all body types
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
