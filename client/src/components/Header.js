import React from "react";
import bgImage from "../images/header-bg.jpg";

const headerStyle = {
  backgroundImage: `url(${bgImage})`,
  maxWidth: "100vw",
  height: "30vw",
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return <header />;
}

export default Header;
