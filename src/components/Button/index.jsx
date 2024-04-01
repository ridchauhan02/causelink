import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    deep_purple_300: "bg-deep_purple-300 text-black-900",
    gray_300: "bg-gray-300 text-black-900",
    purple_200: "bg-purple-200 text-black-900",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-3",
  md: "p-[15px]",
  lg: "p-[23px] sm:px-5",
  xl: "p-7 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_300",
    "gray_300",
    "purple_200",
    "white_A700",
  ]),
};

export { Button };
