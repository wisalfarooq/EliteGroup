import React from "react";
import { FaBuilding, FaHome, FaTools } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="text-4xl text-blue-500" />,
      title: "Construction",
      description: "We deliver world-class construction services."
    },
    {
      icon: <FaHome className="text-4xl text-green-500" />,
      title: "Real Estate",
      description: "Elite Dream Homes for every lifestyle."
    },
    {
      icon: <FaTools className="text-4xl text-gray-500" />,
      title: "Maintenance",
      description: "Reliable and affordable property maintenance."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
