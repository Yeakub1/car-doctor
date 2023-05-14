import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import imgs from "../../../assets/images/checkout/checkout.png";
import { authContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Bookservices = () => {
  const services = useLoaderData();
    const { title,_id, price, img } = services;
    const { user } = useContext(authContext);

  const handleBookservices = event => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const price = from.price.value;
    const email = from.email.value;
    const date = from.date.value;
    const message = from.message.value;
    const booking = {
      customerName: name,
      price: price, img, email, date,
      services: title,
      services_id: _id
    };
    console.log(booking);
     event.target.reset();
      

     // send to server
    fetch("http://localhost:5000/bookings", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
         if (data.insertedId) {
           Swal.fire({
             title: "Success!",
             text: "Add your Services",
             icon: "success",
             confirmButtonText: "Okay",
           });
         }
      })
    
    };


  return (
    <div>
      <div class="relative overflow-hidden rounded-lg cursor-pointer">
        <img class="object-cover w-full h-48" src={imgs} alt="" />
        <div class="absolute top-16 left-10 px-6 py-4 ">
          <h4 class="mb-3 text-5xl font-semibold text-white">
            Add New Service
          </h4>
        </div>
      </div>
      {/* from area */}
      <h1 className="font-bold text-3xl text-center mt-10 text-orange-500">
        {title}
      </h1>
      <form onSubmit={handleBookservices}>
        <div className="mt-14 px-10">
          <div className="flex gap-10 ">
            <input
              className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
              type="text"
              name="name"
              placeholder="Service Name"
            />{" "}
            <br />
            <input
              className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
              type="text"
              name="price"
              placeholder="Service Price"
              defaultValue={"$" + " " + price}
            />
          </div>
          <div className="flex gap-10  mt-8">
            <input
              className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
              type="text"
              name="email"
              placeholder="Text here"
              defaultValue={user?.email}
            />{" "}
            <br />
            <input
              className="py-2 w-6/12 bg-slate-200 ps-2 rounded-md"
              type="date"
              name="date"
            />
          </div>
          <textarea
            className="bg-slate-200 mt-8 ps-2 pt-2 rounded-md"
            rows="6"
            cols="147"
            name="message"
            placeholder="Product Description"
          ></textarea>
          <button
            className="bg-red-500 text-white w-full py-2 mt-8 rounded-md font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookservices;
