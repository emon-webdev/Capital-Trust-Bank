import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link to="/" className="mr-5">
        Home
      </Link>
      <Link to="/services" className="mr-5">
        Services
      </Link>
      <Link to="/about" className="mr-5">
        About
      </Link>
      <Link to="/login" className="mr-5">
        Login
      </Link>
      <Link to="/signup" className="mr-5">
        Signup
      </Link>
    </div>
  );
};

export default Header;
