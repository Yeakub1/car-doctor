import React, { useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
      <div>
        <div className="text-center">
          <h3 className="text-red-500">Service</h3>
          <h1 className="font-bold text-2xl mt-4 mb-5">Our Service Area</h1>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <ServicesItems key={service._id} service={service}></ServicesItems>
          ))}
        </div>
      </div>
    );
};

export default Services;