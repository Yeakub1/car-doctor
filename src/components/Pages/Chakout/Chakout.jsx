import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../../assets/images/checkout/checkout.png'

const Chakout = () => {
    const services = useLoaderData();
    const {title,price } = services;
    return (
      <div>
        <h1>{ title}</h1>
          <div class="relative overflow-hidden rounded-lg cursor-pointer">
            <img class="object-cover w-full h-48" src={img} alt="" />
            <div class="absolute top-16 left-10 px-6 py-4 ">
              <h4 class="mb-3 text-5xl font-semibold text-white">Chak out</h4>
            </div>
          </div>
        <form>
          <div className="mt-24 px-10">
            <div className="flex gap-10 ">
              <input
                className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
                type="text"
                name="name"
                placeholder="Frist Name"
              />{" "}
              <br />
              <input
                className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
                type="text"
                name="name"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-10  mt-8">
              <input
                className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
                type="number"
                name="name"
                placeholder="Your Phone"
              />{" "}
              <br />
              <input
                className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
                type="email"
                name="name"
                placeholder="Your Email"
              />
            </div>
            <textarea
              className="bg-slate-200 mt-8 ps-2 pt-2 rounded-md"
              rows="6"
              cols="147"
              name="comment"
              form="usrform"
              placeholder="  Enter text here..."
            ></textarea>
            <button
              className="bg-red-500 text-white w-full py-2 mt-8 rounded-md font-bold"
              type="submit"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    );
};

export default Chakout;