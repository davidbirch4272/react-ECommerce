import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <div className="book">
              <a href="">
                <figure className="book__image--wrapper">
                <img scr="." alt="" className="book__img"/>
                </figure>
              </a> 
              <div className="book__title">
                <a href="/" className="book__title--link">
                  Atomic Habits
                </a>
              </div>
              <div className="book__ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
               <div className="book__price">
               <span className="book__price--normal">$15.00</span>
               $10.00 
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
