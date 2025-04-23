import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const BookInfo = ({ books }) => {
  return (
    <div id="id" className="books__body">
      <main id="id" className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FaArrowLeft />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <figure className="book__selected--figure">
              <img
                src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                alt=""
                className="book__selected-ig"
              />
            </figure>
            <div className="book__selected--description">
              <h2 className="book__selected--title">
                Crack the coding Interview
              </h2>
              <Rating rating="4.5" />
              <div className="book__selected--price">
                <Price />

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
