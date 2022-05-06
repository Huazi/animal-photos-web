import React from "react";
import { Routes, Route, Link } from "react-router-dom";
const Header = () => {
    return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
           Animal Photos
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/categorylist"} className="nav-link">
                Category Management
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/photolist"} className="nav-link">
                Photo Management 
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
          </div>
        </nav>  
        
      </div>
    );
}
export default Header;