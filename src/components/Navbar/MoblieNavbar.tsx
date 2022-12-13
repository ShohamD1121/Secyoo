import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import navbarLogo2 from "../../images/navbarLogo2.png";
import { routes } from "../../routes/routes";

const MoblieNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between items-center w-full bg-cyan-100 h-[72px]">
        <div className="w-1/2">
          <Link to={routes.MAIN}>
            <img src={navbarLogo2} alt="logo" className="ml-7 w-[130px]" />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center w-[60px] h-4/5 mr-2"
        >
          <span
            className={`bg-blue-500  h-[2px] block w-[50px] ease-in-out duration-300 ${
              !isOpen ? "translate-y-[-0.75rem]" : "rotate-[-45deg]"
            }`}
          ></span>
          <span
            className={`bg-blue-500  h-[2px] block  w-[50px] ease-in-out duration-[400ms]   ${
              !isOpen ? "" : "opacity-0"
            }`}
          ></span>
          <span
            className={`bg-blue-500  h-[2px] block  w-[50px] ease-in-out duration-300 ${
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
    </Fragment>
  );
};

export default MoblieNavbar;
