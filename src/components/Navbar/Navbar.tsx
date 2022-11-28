import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import logo from "../../images/logo.png";
import { routes } from "../../routes/routes";

const Navbar: React.FC = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  return width > 768 ? (
    <nav className="flex justify-center w-full bg-cyan-100 h-[72px]">
      <div
        className="flex justify-between w-11/12
       px-4 lg:max-w-7xl md:items-center md:flex md:px-8"
      >
        <Link to={routes.MAIN}>
          <img src={logo} alt="skilty-logo" className="w-1/3" />
        </Link>

        <div className="flex gap-5">
          <ul className="flex items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-cyan-600">
            <li className="hover:text-cyan-900">
              <Link to={routes.MAIN}>Home</Link>
            </li>
            <li className="hover:text-cyan-900">
              <Link to={routes.MAIN}>About</Link>
            </li>
            <li className="hover:text-cyan-900">
              <Link to={routes.MAIN}>Contact us</Link>
            </li>
          </ul>
          <Link
            to={routes.MAIN}
            className="px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-50 hover:text-blue-600"
          >
            Join us
          </Link>
        </div>
      </div>
    </nav>
  ) : (
    <div className="flex justify-between items-center w-full bg-cyan-100 h-[72px]">
      <img src={logo} alt="logo" className="w-1/3" />
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center w-1/6 h-4/5 mr-2"
      >
        <span
          className={`bg-blue-500  h-[2px] block w-full ease-in-out duration-300 ${
            !isOpen ? "translate-y-[-0.75rem]" : "rotate-[-45deg]"
          }`}
        ></span>
        <span
          className={`bg-blue-500  h-[2px] block w-full ease-in-out duration-[400ms]   ${
            !isOpen ? "" : "opacity-0"
          }`}
        ></span>
        <span
          className={`bg-blue-500  h-[2px] block w-full ease-in-out duration-300 ${
            !isOpen ? "translate-y-3" : "translate-y-[-4px] rotate-[45deg]"
          }`}
        ></span>
      </div>
      <div
        className={`flex  justify-center items-center bg-cyan-100 absolute top-[72px] ease-in-out duration-500 w-full h-[calc(100vh-72px)] right-0 z-10 ${
          !isOpen ? "translate-x-full" : ""
        }`}
      >
        <div className="flex flex-col h-5/6 w-3/4">
          <ul>
            <li>
              <Link
                className="mb-[1em] block no-underline text-blue-700 text-center hover:scale-[1.2]"
                to={routes.MAIN}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="mb-[1em] block no-underline text-blue-700 text-center hover:scale-[1.2]"
                to={routes.MAIN}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="mb-[1em] block no-underline text-blue-700 text-center hover:scale-[1.2]"
                to={routes.MAIN}
              >
                Contact us
              </Link>
            </li>
            <li>
              <div className="">
                <Link
                  to={routes.MAIN}
                  className="block w-3/4 mx-auto text-blue-700 px-2 py-1 bg-cyan-200 rounded-xl text-center hover:scale-[1.1]"
                >
                  Join us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
