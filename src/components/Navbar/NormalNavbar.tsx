import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import logo from "../../images/logo.png";
import navbarLogo2 from "../../images/navbarLogo2.png";

const NormalNavbar: React.FC = () => {
  return (
    <nav className="flex justify-center w-full bg-cyan-100 h-[72px]">
      <div
        className="flex justify-between w-11/12
   px-4 lg:max-w-7xl md:items-center md:flex md:px-8"
      >
        <div className="w-1/5">
          <Link to={routes.MAIN}>
            <img src={navbarLogo2} alt="secyoo-logo" />
          </Link>
        </div>

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
  );
};

export default NormalNavbar;
