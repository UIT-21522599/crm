import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cart from "../assets/images/cart.svg";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            ShineBright<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav m-auto mb-2 mb-md-0">
              {/* <li className="nav-item ">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li> */}

              <li className="active">
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/ladipage" className="nav-link">
                  Ladipage
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link to="/cart" className="nav-link">
                  <img src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
