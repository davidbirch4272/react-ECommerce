import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__image--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
        <div className="book__price">
          {book.salesPrice ? (
            <>
              <span className="book__price--normal">
                ${book.originalPrice.toFixed(2)}
              </span>
              ${book.salesPrice.toFixed(2)}
            </>
          ) : (
           <>${book.originalPrice.toFixed(2)}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
