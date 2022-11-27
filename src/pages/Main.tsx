import React from "react";
import logo from "../images/onlyLogo.png";

const Main: React.FC = () => {
  return (
    <div className="md:h-[calc(100vh-72px)] flex flex-col justify-center items-center w-full min-h-[calc(100vh-72px)] bg-gradient-to-b from-cyan-200 to-cyan-300 py-10 md:py-0">
      <div className="w-5/6 h-3/4 flex flex-col gap-14 md:gap-0 md:flex-row justify-between">
        <div className="flex flex-col justify-around w-full md:w-4/6 text-white gap-10 md:gap-0">
          <h1 className="font-bold text-4xl ">
            <span className="text-blue-600">Making sure your</span> Website is
            <span className="text-blue-600"> 100% Secured</span>
          </h1>
          <p className="text-blue-900 text-lg w-full md:w-3/4">
            Carrying out a manual attack based on a variety of tools in which an
            individual attack simulation is performed in order to locate
            weaknesses
          </p>
          <button className="bg-white text-blue-500 w-1/2 md:w-1/4 mx-auto px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white">
            JOIN US!
          </button>
        </div>
        <div className="flex justify-center items-center w-full md:w-2/6">
          <img src={logo} alt="logo-img" className="image md:w-7/12 w-3/4" />
        </div>
      </div>
      {/* <div className="md:h-[calc(100vh-72px)] flex justify-center items-center">
        <h1>Secyoo</h1>
        <img className="w-16" src={logo} alt="img" />
      </div> */}
    </div>
  );
};

export default Main;
