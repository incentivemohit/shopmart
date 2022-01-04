import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="title-wrapper">
            <div id="title-logo">
              <img width={50} height={50} src={logo} alt="" />
            </div>
            <div className="title-name">ShopMart</div>
          </div>

          <div className="header-searchbar">
            <div className="header-select">
              <select
                class="form-select form-select-sm p-2"
                aria-label=".form-select-sm example"
              >
                <option selected>Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="searchbar-input">
              <input type="text" className="searchInputField" />
            </div>
            <div>
              <i className="fa fa-search search-icon"></i>
            </div>
          </div>

          <div className="header-cart">
            <img width={50} height={50} src={cart} alt="" />
          </div>

          <div className="header-user-account">
            <div className="user-account">
              <i className="fa fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
