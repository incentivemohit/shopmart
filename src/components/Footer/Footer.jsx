import React from "react";
import "./Footer.css";
import shilpa from "../../images/shilpa.jpg";
import drew from "../../images/mkk.jpg";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div class="bg-dark text-secondary px-4 py-5 text-center">
          <div className="footer-top">
            <div className="footer-shopmart">ShopMart</div>
            <div className="footer-about-us ">About us</div>
            <div className="footer-social-Icons">
              <ul className="social-Icons-List">
                <li className="social-Icons">
                  <i className="fa fa-facebook"></i>
                </li>
                <li className="social-Icons">
                  <i className="fa fa-instagram"></i>
                </li>
                <li className="social-Icons">
                  <i className="fa fa-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-center">
            <div className="about-us-details ">
              1) Any node can be a starting point. We can traverse the whole
              list by starting from any point. We just need to stop when the
              first visited node is visited again. 2) Useful for implementation
              of queue. Unlike this implementation, we don’t need to maintain
              two pointers for front and rear if we use circular linked list. We
              can maintain a pointer to the last inserted node and front can
              always be obtained as next of last. 3) Circular lists are useful
              in applications to repeatedly go around the list. For example,
              when multiple applications are running on a PC, it is common for
              the operating system to put the running applications on a list and
              then to cycle through them, giving each of them a slice of time to
              execute, and then making them wait while the CPU is given to
              another application. It is convenient for the operating system to
              use a circular list so that when it reaches the end of the list it
              can cycle around to the front of the list.
            </div>
            <div
              className="developers"
              style={{ color: "white", marginTop: "10px" }}
            >
              <h2>Developers</h2>
            </div>
            <div className="developer-photos">
              <div class="row developer-img">
                <div class="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width={140}
                    height={140}
                    src={shilpa}
                  ></img>

                  <h2>Jenny Williams</h2>
                  <p>NSUT(EAST CAMPUS), Delhi</p>
                </div>
                <div className="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width={140}
                    height={140}
                    src={drew}
                  ></img>

                  <h2>Drew</h2>
                  <p>NSUT(EAST CAMPUS),Murda ground, Delhi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright bg-warning">
              Copyright@2021 All rights are reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
