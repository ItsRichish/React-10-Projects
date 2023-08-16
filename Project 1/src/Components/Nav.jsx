import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo Image" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Log In</button>
      </nav>
    </div>
  );
};

export default Nav;
