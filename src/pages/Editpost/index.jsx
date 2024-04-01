import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const EditpostPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <Header className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[1283px] md:h-[1385px] max-w-[1285px] mt-[104px] mx-auto md:px-5 relative w-full">
          <div className="bg-black-900 h-6 ml-auto mr-[179px] mt-[461px] w-6"></div>
          <div className="absolute bg-gray-600_01 flex flex-col gap-[49px] h-full inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 rounded-[50px] w-full">
            <Text
              className="md:text-5xl text-[64px] text-white-A700"
              size="txtJudsonBold64"
            >
              Edit Post
            </Text>
            <div className="flex flex-col items-center justify-start mb-[22px] w-[84%] md:w-full">
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
                onClick={() => navigate("/posteditedsuccessfully")}
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-12 md:px-5 w-full" />
      </div>
    </>
  );
};

export default EditpostPage;
