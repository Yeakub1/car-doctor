import React from 'react';
import logo from '../../../assets/logo.svg'
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer p-10 bg-black text-white mt-16">
        <div className="grid lg:grid-cols-4 w-full justify-between ">
          <div className="">
            <h1 className="w-20 mb-3">
              <img src={logo} alt="" />
            </h1>
            <p>
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            <div className="flex gap-3 mt-4">
              <a href="">
                <FaGoogle />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                {" "}
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="">
            <span className="footer-title">About</span>
            <h3 className="link link-hover mt-3">Home</h3>
            <h3 className="link link-hover mt-3">Service</h3>
            <h3 className="link link-hover mt-3">Contact</h3>
          </div>
          <div className="">
            <span className="footer-title">Company</span>
            <h3 className="link link-hover mt-3">Why Car Doctor </h3>
            <h3 className="link link-hover mt-3">About</h3>
          </div>
          <div className="">
            <span className="footer-title">Support</span>
            <h3 className="link link-hover mt-3">Support Center</h3>
            <h3 className="link link-hover mt-3">Feedback</h3>
            <h3 className="link link-hover mt-3">Accesbility</h3>
          </div>
        </div>
      </footer>
    );
};

export default Footer;