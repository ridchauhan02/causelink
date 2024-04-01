import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Switch, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
      <div className="bg-gray-600 flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[77px] w-full">
      <Img
            className="sm:flex-1 h-[132px] md:h-auto object-cover w-[13%] sm:w-full"
            src="images/img_rectangle5.png"
            alt="rectangleFive"
          />
          <Text
            className="common-pointer ml-11 sm:ml-[0] sm:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/home1")}
          >
            Home
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[41px] sm:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/")}
          >
            Search
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[38px] sm:mt-0 mt-[74px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/signin")}
          >
            Register your organization
          </Text>
          <Text
            className="sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/faqs")}
          >
            FAQs
          </Text>
          <Button
            className="common-pointer cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[344px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/signin")}
            color="purple_200"
            size="md"
            variant="fill"
          >
            Sign In
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
