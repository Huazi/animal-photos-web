import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {NavBar} from './NavBar';

const Header = () => {
    return (
      <div className="Header">
        <NavBar></NavBar>
      </div>
    );
}
export default Header;
