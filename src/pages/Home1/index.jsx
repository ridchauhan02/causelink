import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Switch, Text } from "components";
import Footer from "components/Footer";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
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
        <div className="flex flex-col items-center justify-start max-w-[1346px] mt-[58px] mx-auto md:px-5 shadow-bs2 w-full">
          <div className="bg-purple-200 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[129px] w-full">
            <div className="flex md:flex-col flex-row gap-[49px] items-start justify-end w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start md:mt-0 mt-[58px]">
                <Text
                  className="md:text-5xl text-[70px] text-black-900"
                  size="txtJudsonBold70"
                >
                  WELCOME
                </Text>
                <Text
                  className="text-3xl  sm:text-[26px] md:text-[28px] text-black-900 text-justify w-full"
                  size="txtJudsonBold30"
                >
                  There are hundreds of thousands of volunteer opportunities
                  throughout the world just waiting for the right volunteer to
                  step up. Search our database for volunteer opportunities
                  inside and outside of the home that meet critical needs. The
                  world is waiting for you to shine your light.
                </Text>
              </div>
              <Img
                className="md:flex-1 w-[1000px] h-[545px] sm:h-auto object-cover w-[49%] md:w-full"
                src="images/img_rectangle41.png"
                alt="rectangleFortyOne"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1346px] mt-[129px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[59px] items-center justify-start w-full">
            <Text
              className="bg-clip-text bg-gradient  md:text-5xl text-[70px] text-shadow-ts text-transparent"
              size="txtJudsonBold70WhiteA700"
            >
              CAUSE LINK
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-[47px] text-3xl sm:text-[26px] md:text-[28px] text-justify text-shadow-ts1 text-white-A700"
                size="txtJudsonBold30WhiteA700"
              >
                CauseLink Engage pulls volunteer opportunities from sites
                around the web to provide the most comprehensive database of
                volunteer opportunities around the world. Individuals an search
                for volunteer projects, nonprofits can post and manage event
                sign-ups, and visitors are invited to start projects of their
                own – all in one place.
              </Text>
              <Img
                className=" sm:ml-[0] ml-[30px]  h-[394px] md:h-auto object-cover rounded-[50px]"
                src="images/img_rectangle5_394x576.png"
                alt="rectangleFive_One"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-[196px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
