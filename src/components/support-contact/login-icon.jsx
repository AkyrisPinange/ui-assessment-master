import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffcc00;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const LoginIcon = ({ name }) => {
  const initial = name.split(" ").slice(-1)[0].charAt(0).toUpperCase();
  return <Icon aria-label={`Login Icon for ${name}`}>{initial}</Icon>;
};

LoginIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LoginIcon;
