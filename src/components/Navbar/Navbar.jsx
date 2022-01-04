import React from "react";
import "./Navbar.css";
import menuIcon from "../../images/circle.png";
function Navbar() {
  return (
    <div id="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item menu-icon">
              <img
                src={menuIcon}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </li>
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Best Sellers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Clothes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Shoes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Accessories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Women
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
