import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../ui/Rating";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__image--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/1" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.orignalPrice} />
      </div>
  );
};

export default Book;
