import React from "react";
import "./styles-components/Logo.css";
import LogoSvg from "../images/logo.svg";

function Logo() {
  return (
    <div>
      <img src={LogoSvg} className="logo" alt="Logo Rick and Morty"></img>
    </div>
  );
}
export default Logo;
