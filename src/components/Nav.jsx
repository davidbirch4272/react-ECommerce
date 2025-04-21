import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
  return (
    <nav>
      <div className="nav container">
        <a href="/">
          <img src="" alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Books
            </a>
          </li>
          <button className="btn__menu">
          <GiHamburgerMenu />
          </button>
        </ul>
      </div>
    </nav>
  );
};


export default Nav