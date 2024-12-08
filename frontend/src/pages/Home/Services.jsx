import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
const servicesData = [
  {
    id: 1,
    title: "Bluetooth speaker",
    description:
      "Bluetooth speaker S812 wireless stereo mini capsule sub-woofer outdoor portable card speaker Crystal sound System...",
    image:
      "/assets/services/Bluetooth speaker S812 wireless stereo mini capsule sub-woofer outdoor portable card speaker Crystal sound System.jfif",
  },
  {
    id: 2,
    title: "Air Compressing",
    description: "Air Compressing  Nebulizer Machine...",
    image: "/assets/services/Air Compressing Nebulizer Machine.jfif",
  },
  {
    id: 3,
    title: "BOYA BY M1 Microphone",
    description:
      "BOYA BY M1 Microphone Boya Professional Microphone for Mobile and DSLR...",
    image:
      "/assets/services/BOYA BY M1 Microphone Boya Professional Microphone for Mobile and DSLR - Black.jfif",
  },
  {
    id: 4,
    title: "Digital LCD",
    description: "Digital LCD Upper Arm Blood Pressure Monitor...",
    image: "/assets/services/Digital LCD Upper Arm Blood Pressure Monitor.jfif",
  },
  {
    id: 5,
    title: "Flexible Camera",
    description:
      "The Flexible Camera is a versatile, portable camera with a flexible tripod that...",
    image: "/assets/services/Flexible Camera Tripod.jfif",
  },
  {
    id: 6,
    title: "Miyako 1.5 Liter",
    description: "Miyako 1.5 Liter Coffee Maker CM 325...",
    image: "/assets/services/Miyako 1.5 Liter Coffee Maker CM 325.jfif",
  },
];

const Services = () => {
  return (
    <motion.section
      className="py-12 px-6 md:px-16 lg:px-24 bg-lightGray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-primary text-4xl font-poppins font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-700 font-roboto mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the range of services we offer to help your business succeed.
        </motion.p>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay, Pagination]}
        className="services-slider"
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.div
              className="bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-[180px] object-cover"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4 text-left">
                <h3
                  className="text-primary text-xl font-bold font-poppins mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 font-roboto mt-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.5",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.description.split(" ").slice(0, 10).join(" ")}...
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-8">
        <button
          className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          See More
        </button>
      </div>
    </motion.section>
  );
};

export default Services;
