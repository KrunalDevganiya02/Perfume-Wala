import React from "react";
import "./NavBar.css";
import logo from "../img/k logo.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">
        <Link to="/">
          <img className="l" src={logo} alt="logo" />
          <span className="wala">Perfume-Wala</span>
        </Link>
        </div>
        <ul className="nav">
          <li>
          <Link to="/"><span>Home</span></Link>
            
          </li>
          <li>
          <Link to="/product"><span>Product</span></Link>
            
          </li>
          <li>
            <Link to="/about"><span>About Us</span></Link>
          </li>
          <li>
            <Link to="/contact"><span>Contact Us</span></Link>
          </li>
        </ul>
        <div className="btns">
          <button className="btn">
          <Link to="/log"><span>LogIn</span></Link>
            </button>
          <button className="btn">
          <Link to="/sign"><span>SignUp</span></Link>
          </button>
        </div>
      </div>
    </>
  );
}
