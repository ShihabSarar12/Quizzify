import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between m-7">
      <p
        className="text-xl font-bold text-purple-800 hover:scale-105
            transition-all duration-300 ease-in-out"
      >
        Quizzify
      </p>
      <nav className="flex gap-6 justify-center">
        <Link
          to="/"
          className="text-xl font-semibold hover:scale-105
                transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="our-offer"
          className="text-xl font-semibold hover:scale-105
                transition-all duration-300 ease-in-out"
        >
          What we offer
        </Link>
        <Link
          to="about"
          className="text-xl font-semibold hover:scale-105
                transition-all duration-300 ease-in-out"
        >
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
