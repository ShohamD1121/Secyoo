import React from "react";
import MoblieNavbar from "./MoblieNavbar";
import NormalNavbar from "./NormalNavbar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Navbar: React.FC = () => {
  const { width } = useWindowDimensions();

  return width > 800 ? <NormalNavbar /> : <MoblieNavbar />;
};

export default Navbar;
