import React from "react";
import Image from "react-native-remote-svg";
import logoSvg from "./resources/logo.svg";

const Logo = () => {
  return (
    <Image
      style={{ width: 111, height: 32 }}
      source={logoSvg}
    />
  );
};

export default Logo;
