import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const missionContent =
    "At BizCraft, our mission is to provide innovative and tailored solutions that empower businesses to achieve their goals seamlessly. We prioritize client satisfaction and long-term growth....";
  const visionContent =
    "Our vision is to be a global leader in tech innovation, fostering growth and success for our clients by consistently delivering high-quality services....";

  return (
    <section className="bg-lightGray py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-poppins text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>
          {/* Tab Buttons */}
          <div className="flex gap-6 justify-center md:justify-start mb-6">
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-md ${
                activeTab === "mission"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Mission
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold rounded-md ${
                activeTab === "vision"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              Vision
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white shadow-lg p-6 rounded-md text-gray-700 font-roboto text-lg leading-7">
            {activeTab === "mission" ? (
              <p>{missionContent}</p>
            ) : (
              <p>{visionContent}</p>
            )}
          </div>

          <button className="bg-accent text-white px-6 mt-8 py-3 rounded hover:bg-secondary transition duration-500">
            Learn More
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center lg:mt-14"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/heroSection/bg1.jpg"
            alt="Team"
            className="rounded-lg shadow-lg w-full max-w-[400px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
