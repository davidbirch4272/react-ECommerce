import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LibraryLogo from "../assets/Library.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom"

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open"; 
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
          <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <GiHamburgerMenu />
          </button>
          <li className="nav__icon">
          <Link to="/cart" className="nav__link"></Link>
            <FaShoppingCart />
            {
             numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
            }
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FaRegWindowClose />
          </button>
          <ul className="menu__links">
         
            <li className="menu__list">
              <Link to="/" className="menu__link">
              Home
              </Link>
            </li>
            
            <li className="menu__list">
              <Link to="/books" className="menu__link">
              Books
              </Link>
            </li>

            <li className="menu__list">
              <Link to="/Cart" className="menu__link">
              Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
