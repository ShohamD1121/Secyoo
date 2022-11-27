import React from "react";
import logo from "../images/onlyLogo.png";

const Main: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <h1>Secyoo</h1>
      <img className="w-16" src={logo} alt="img" />
    </div>
  );
};

export default Main;
