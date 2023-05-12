import React, { useContext } from "react";
import img from "../../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(authContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const loged = { email, password };
    console.log(loged);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:flex justify-start mt-14">
      <div className="w-[50%]  ">
        <div className="flex mt-20  justify-center items-center">
          <img className=" w-80" src={img} alt="" />
        </div>
      </div>
      <div className="w-[50%]">
        <div className="shadow-2xl py-7 px-10 w-[70%]">
          <h1 className="font-bold text-3xl text-center mb-8">Log In</h1>

          <form onSubmit={handleLogin}>
            <p>Email</p>
            <input
              className="w-full bg-slate-100 py-2 ps-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <p className="mt-4">Confirm Password</p>
            <input
              className="w-full bg-slate-100 py-2 ps-2 rounded-md"
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
          <div className="flex justify-center gap-4 mt-5 text-2xl">
            <FaFacebook />
            <FaLinkedin />
            <FaGoogle />
          </div>
          <h1 className="text-center mt-8">
            No account?{" "}
            <span className="text-red-500">
              <Link to="/register">Sign Up</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
