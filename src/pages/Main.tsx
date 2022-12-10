import React from "react";
import { motion } from "framer-motion";
import logo from "../images/onlyLogo.png";
import newLogo from "../images/newLogo.png";
import newLogov2 from "../images/newLogoV2.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Main: React.FC = () => {
  return (
    <div className="md:h-[calc(100vh-72px)] flex flex-col justify-center items-center w-full min-h-[calc(100vh-72px)] bg-gradient-to-b from-cyan-100 to-cyan-200 py-10 md:py-0">
      <div className="w-5/6 h-3/4 flex flex-col gap-14 md:gap-0 md:flex-row justify-between">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-evenly w-full md:w-4/6 text-[#ef426f] gap-10 md:gap-0"
        >
          <motion.h1 variants={item} className="font-bold text-7xl ">
            <span className="text-[#0a4d90]">SECURITY FOR </span>
            <br />
            YOUR SUCCESS
          </motion.h1>
          <motion.p
            variants={item}
            className="text-blue-900 text-[16px] w-full md:w-3/4"
          >
            Secyoo is a business that provides penetration testing and cyber
            security services to help companies protect themselves from cyber
            threats.
          </motion.p>
          {/* <motion.button
            variants={item}
            className="bg-white text-blue-500 w-1/2 md:w-1/4 mx-auto px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
          >
            button text
          </motion.button> */}
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex justify-center items-center mx-auto self-center w-3/6 md:w-1/6"
        >
          <img src={newLogov2} alt="logo-img" className="image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
