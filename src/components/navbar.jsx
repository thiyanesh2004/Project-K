import "./navbar.css";
import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <Link to="/home"> Home </Link>
        <Link to="/"> Shop </Link>
        <Link to="/login">Login</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
