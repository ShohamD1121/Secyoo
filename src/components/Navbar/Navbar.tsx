import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import logo from "../../images/logo.png";
import { routes } from "../../routes/routes";

const Navbar: React.FC = () => {
  const { width } = useWindowDimensions();

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
    <div className="bg-cyan-100">
      <div className="flex items-center justify-between py-5">
        <Link to="/">
          <img src={logo} alt="skilty-logo" className="w-1/3" />
        </Link>
      </div>
      <label className="ham-container">
        <input type="checkbox" />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul className="flex flex-col justify-center w-1/2 h-1/2 text-2xl">
          <li>
            <Link
              className="mb-[1em] block no-underline text-blue-400 text-center"
              to={routes.MAIN}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="mb-[1em] block no-underline text-blue-400 text-center"
              to={routes.MAIN}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="mb-[1em] block no-underline text-blue-400 text-center"
              to={routes.MAIN}
            >
              Contact us
            </Link>
          </li>
          <li>
            <div className="space-x-2 md:inline-block">
              <Link
                to={routes.MAIN}
                className="block text-blue-400 px-4 py-2 bg-cyan-100 rounded-xl text-center"
              >
                Join us
              </Link>
            </div>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default Navbar;
