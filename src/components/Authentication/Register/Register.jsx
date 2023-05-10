import React from 'react';
import img from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const loged = { name,email, password };
        console.log(loged);
    }
    return (
      <div className="lg:flex justify-start mt-14">
        <div className="w-[50%]">
          <div className="flex mt-20  justify-center items-center">
            <img className="w-80" src={img} alt="" />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="shadow-2xl py-7 px-10 w-[70%]">
            <h1 className="font-bold text-3xl text-center mb-8">Sign Up</h1>
            <form onSubmit={handleRegister}>
              <p>Name</p>
              <input
                className="w-full bg-slate-100 py-2 ps-2"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
              <p className="mt-4">Email</p>
              <input
                className="w-full bg-slate-100 py-2 ps-2"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <p className="mt-4">Confirm Password</p>
              <input
                className="w-full bg-slate-100 py-2 ps-2"
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
              <button
                className="w-full py-2 bg-red-500 text-white rounded-md mt-7"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <p className="text-center mt-3">Or Sign In with</p>

            <h1 className="text-center mt-8">
              Have an account?{" "}
              <span className="text-red-500">
                <Link to="/contact">Sign In</Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
    
};

export default Register;