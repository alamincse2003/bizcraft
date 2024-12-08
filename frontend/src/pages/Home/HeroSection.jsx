import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import "../../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full h-[500px] bg-cover bg-center text-white"
            style={{
              backgroundImage: "url('./assets/heroSection/bg1.jpg')",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded-lg"
            >
              Build Your Dream Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl mt-4 bg-black/40 p-2 rounded"
            >
              Innovative solutions for your digital presence
            </motion.p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-accent text-white py-2 px-4 rounded-lg mr-4"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-secondary text-white py-2 px-4 rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full h-[500px] bg-cover bg-center text-white"
            style={{
              backgroundImage: "url('./assets/heroSection/bg2.jpg')",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded-lg"
            >
              Transform Your Ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl mt-4 bg-black/40 p-2 rounded"
            >
              Professional designs tailored for your needs
            </motion.p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-accent text-white py-2 px-4 rounded-lg mr-4"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-secondary text-white py-2 px-4 rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full h-[500px] bg-cover bg-center text-white"
            style={{
              backgroundImage: "url('./assets/heroSection/bg3.jpg')",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded-lg"
            >
              Achieve Your Goals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl mt-4 bg-black/40 p-2 rounded"
            >
              Let’s make your vision a reality
            </motion.p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-accent text-white py-2 px-4 rounded-lg mr-4"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-secondary text-white py-2 px-4 rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full h-[500px] bg-cover bg-center text-white"
            style={{
              backgroundImage: "url('./assets/heroSection/bg4.jpg')",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold bg-black/40 p-4 rounded-lg"
            >
              Crafting Excellence in Every Pixel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl mt-4 bg-black/40 p-2 rounded"
            >
              Empower your brand with tailor-made digital solutions.
            </motion.p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-accent text-white py-2 px-4 rounded-lg mr-4"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                className="bg-secondary text-white py-2 px-4 rounded-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HeroSection;
