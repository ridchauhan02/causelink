import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const FornewpostTwoPage = () => {
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
            onClick={() => navigate("/hometwo")}
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
            className="common-pointer sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/userdashboardtwo")}
          >
            My Dashboard
          </Text>
          <Text
            className="common-pointer sm:ml-[0] ml-[34px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
            onClick={() => navigate("/faqs")}
          >
            FAQs
          </Text>
          <Button
            className="common-pointer cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[506px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            onClick={() => navigate("/signin")}
            color="purple_200"
            size="md"
            variant="fill"
          >
            Sign Out
          </Button>
        </div>
        <Text
          className="mt-[21px] md:text-5xl text-[64px] text-white-A700"
          size="txtJudsonBold64"
        >
          New Post
        </Text>
        <div className="h-[1283px] md:h-[1289px] max-w-[1285px] mt-[7px] mx-auto md:px-5 relative w-full">
          <div className="bg-black-900 h-6 ml-auto mr-[179px] mt-[461px] w-6"></div>
          <div className="absolute bg-gray-600_01 flex flex-col gap-[52px] h-full inset-[0] items-center justify-center m-auto p-[60px] md:px-10 sm:px-5 rounded-[50px] w-full">
            <Text
              className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              {" "}
              Add Post
            </Text>
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Title
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Date
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black900"
              >
                Commitment
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                In-person or Remote
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[37px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                Address
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                Duration
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-8 sm:px-5 px-[35px] py-[25px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                Frequency
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-[29px] pb-7 pt-[22px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                Mode
              </Text>
              <Text
                className="bg-white-A700 h-[74px] justify-center max-w-[1006px] md:max-w-full mt-7 pb-[31px] pt-[19px] sm:px-5 px-[35px] rounded-[15px] text-black-900_01 text-shadow-ts2 text-xl w-full"
                size="txtJudsonRegular20Black90001"
              >
                Note
              </Text>
              <Button
                className="common-pointer !text-gray-900_01 cursor-pointer font-bold leading-[normal] min-w-[176px] mt-[74px] rounded-[15px] shadow-bs text-3xl sm:text-[26px] md:text-[28px] text-center"
                onClick={() => navigate("/postsuccessfully")}
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-12 md:px-5 w-full" />
      </div>
    </>
  );
};

export default FornewpostTwoPage;
