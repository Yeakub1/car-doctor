import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServicesItems = ({ service }) => {
    const { title, price,img } = service;
    return (
      <div className="mt-10 ">
        <div className=" shadow-2xl rounded-2xl px-5">
          <img className="w-full h-60" src={img} alt="" />
          <h2>{title}</h2>
          <div className="flex text-red-500 justify-between pb-3">
            <h3>{price}</h3>
            <FaArrowRight />
          </div>
        </div>
      </div>
    );
};

export default ServicesItems;