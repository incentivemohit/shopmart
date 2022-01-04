import React from "react";
import "./Sidebar.css";
import shilpa from "../../images/shilpa.jpg";

function Sidebar() {
  return (
    <>
      <div className="sidebar-wrapper">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: "280px;" }}
        >
          <div className="profile-section">
            <div className="profile-img">
              <img src={shilpa} className="dp" alt="" />
            </div>
            <p className="profile-name">Jenny Williams</p>
          </div>

          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
