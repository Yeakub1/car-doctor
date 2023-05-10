import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className="lg:flex justify-start mb-20">
        <div className="w-[50%]">
          <img className="w-[70%] h-full" src={img1} alt="" />
          <img className="w-[50%]  mt-[-160px] ml-48" src={img2} alt="" />
        </div>
        <div className="w-[50%]">
          <h2 className="text-red-500 font-bold text-xl">About Us</h2>
          <h1 className="font-bold text-5xl mt-3">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="w-[80%] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="w-[80%] mt-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className='px-4 py-2 bg-red-500 text-white mt-4 rounded-md'>Get More Info</button>
        </div>
      </div>
    );
};

export default About;