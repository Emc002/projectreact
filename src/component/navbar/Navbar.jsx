import React from "react";
import "../../assets/css/App.css";
import books from "../../assets/images/books.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = {
    listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0",
  };

  const actBehave = {
    color: "red",
    listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0",
  };

  return (
    <nav className="navbar">
      <img className="logo" src={books} />

      <div className={({ isActive }) => (isActive ? "onactdiv" : "offact")}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "onact" : "offact")}
        >
          HOME
        </NavLink>
      </div>
      <div className={({ isActive }) => (isActive ? "onact" : "offact")}>
        <NavLink
          to="/masterdata"
          className={({ isActive }) => (isActive ? "onact" : "offact")}
        >
          Master Data
        </NavLink>
      </div>
      <div className={({ isActive }) => (isActive ? "onact" : "offact")}>
        <NavLink
          to="/authordata"
          className={({ isActive }) => (isActive ? "onact" : "offact")}
        >
          Author Data
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
