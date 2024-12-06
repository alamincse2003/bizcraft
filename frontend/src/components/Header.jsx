import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = (
  <>
    <motion.li
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/" className="hover:text-accent">
        Home
      </Link>
    </motion.li>

    <motion.li
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/about" className="hover:text-accent">
        About
      </Link>
    </motion.li>

    <motion.li
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/services" className="hover:text-accent">
        Services
      </Link>
    </motion.li>
    <motion.li
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/gallery" className="hover:text-accent">
        Gallery
      </Link>
    </motion.li>
    <motion.li
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link to="/contact" className="hover:text-accent">
        Contact
      </Link>
    </motion.li>
  </>
);
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white font-poppins">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="font-roboto text-2xl font-bold">
          <Link to="/">BizCraft</Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">{links}</ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <XMarkIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-primary p-4"
          >
            <ul className="space-y-4">{links}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
