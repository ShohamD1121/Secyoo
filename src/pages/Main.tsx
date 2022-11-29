import React from "react";
import { motion } from "framer-motion";
import logo from "../images/onlyLogo.png";

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
          className="flex flex-col justify-around w-full md:w-4/6 text-black gap-10 md:gap-0"
        >
          <motion.h1 variants={item} className="font-bold text-4xl ">
            <span className="text-blue-600">This is a</span> Title
            <span className="text-blue-600"> Title Title</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-blue-900 text-lg w-full md:w-3/4"
          >
            This is description
          </motion.p>
          <motion.button
            variants={item}
            className="bg-white text-blue-500 w-1/2 md:w-1/4 mx-auto px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white"
          >
            button text
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex justify-center items-center w-full md:w-2/6"
        >
          <img src={logo} alt="logo-img" className="image md:w-7/12 w-3/4" />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
