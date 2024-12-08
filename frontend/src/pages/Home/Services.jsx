import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaShoppingCart } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={40} className="text-primary" />,
      title: "Web Development",
      description: "Custom websites tailored to your business needs.",
    },
    {
      icon: <FaChartLine size={40} className="text-primary" />,
      title: "Digital Marketing",
      description: "Enhance your online presence with data-driven strategies.",
    },
    {
      icon: <FaShoppingCart size={40} className="text-primary" />,
      title: "E-commerce Solutions",
      description:
        "Build scalable online stores with seamless user experience.",
    },
  ];

  return (
    <section className="bg-lightGray py-12 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <motion.h2
          className="text-primary text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 text-lg mt-2">
          Explore what we offer to help your business grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-accent transition duration-300">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
