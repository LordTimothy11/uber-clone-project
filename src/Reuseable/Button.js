import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  name,
  width,
  height,
  fontSize,
  fontWeight,
  borderTopLeft,
  borderBottomLeft,
  borderBottomRight,
  borderTopRight,
  color,
  bgColor,
  border,
  handleClick,
}) => {
  return (
    <button
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderBottomLeftRadius: borderBottomLeft,
        borderBottomRightRadius: borderBottomRight,
        borderTopRightRadius: borderTopRight,
        borderTopLeftRadius: borderTopLeft,
        color: color,
        backgroundColor: bgColor,
        border: border,
      }}
      onClick={handleClick}
    >
        <Link></Link>
      {name}
    </button>
  );
};

export default Button;
