import React from "react";

const sizeClasses = {
  txtJudsonBold32: "font-bold font-judson",
  txtJudsonBold50: "font-bold font-judson",
  txtJudsonRegular30Black90071: "font-judson font-normal",
  txtJudsonBold30: "font-bold font-judson",
  txtJudsonBold70WhiteA700: "font-bold font-judson",
  txtKadwaBold50: "font-bold font-kadwa",
  txtJudsonRegular32: "font-judson font-normal",
  txtJudsonBold70: "font-bold font-judson",
  txtJudsonRegular30: "font-judson font-normal",
  txtJudsonRegular30Gray500: "font-judson font-normal",
  txtJudsonRegular30Black900: "font-judson font-normal",
  txtJudsonBold32Gray900: "font-bold font-judson",
  txtJudsonRegular20Black900: "font-judson font-normal",
  txtJudsonBold30WhiteA700: "font-bold font-judson",
  txtInterExtraBold96: "font-extrabold font-inter",
  txtJudsonRegular20Black90001: "font-judson font-normal",
  txtJudsonBold64: "font-bold font-judson",
  txtJudsonRegular27: "font-judson font-normal",
  txtJudsonRegular24Black900: "font-judson font-normal",
  txtJudsonBold40: "font-bold font-judson",
  txtJudsonRegular30Black90001: "font-judson font-normal",
  txtJudsonRegular20: "font-judson font-normal",
  txtInterMedium32: "font-inter font-medium",
  txtJudsonBold40Black900: "font-bold font-judson",
  txtJudsonBold50WhiteA70099: "font-bold font-judson",
  txtInterBold32: "font-bold font-inter",
  txtJudsonRegular24: "font-judson font-normal",
  txtJudsonRegular40: "font-judson font-normal",
  txtJudsonRegular30WhiteA700: "font-judson font-normal",
  txtJudsonBold48: "font-bold font-judson",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
