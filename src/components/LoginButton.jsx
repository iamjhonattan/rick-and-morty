import React from "react";
import PropTypes from "prop-types";
import { FaSignInAlt } from "react-icons/fa";
import "./styles-components/LoginButton.css";

export default function LoginButton({ onClick }) {
  return (
    <button className="login-button" onClick={onClick}>
      <FaSignInAlt className="login-icon" />
      Iniciar sesión
    </button>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
