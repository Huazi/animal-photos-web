import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom";


import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
// import AuthVerify from "../common/AuthVerify";
import EventBus from "../common/EventBus";


export const NavBar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

    return (
      <div class="p-1 bg-light mb-4">
      <h1> <Link to={"/"} className="navbar-brand">
          Animal Photos Library
        </Link></h1>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

            <li className="nav-item">
              <Link to={"/photosalbums"} className="nav-link">
                Photos
              </Link>
            </li>
            {showAdminBoard || showModeratorBoard || currentUser && (
              <li className="nav-item">
                  <Link to={"/photolist"} className="nav-link">
                    Photo Management
                  </Link>
                </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/categorylist"} className="nav-link">
                  Category Management
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Dashboard
                </Link>
              </li>
            )}
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Dashboard
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Dashboard
                </Link>
              </li>
            )}

          </div>

        {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        </div>
    );
};
