import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};
