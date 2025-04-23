import React from "react"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";


const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
       {new Array(Math.floor(rating)).fill(0).map((_, index) => 
       <FaStar key={index} />
     )}
     {!Number.isInteger(rating) && (<FaStarHalf />
     )}
    </div>
  )
};

export default Rating;
