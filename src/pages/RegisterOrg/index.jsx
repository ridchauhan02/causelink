import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const RegisterOrgPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-start justify-start mx-auto pb-[93px] w-full">
        <div className="flex flex-col items-center w-full">
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
              className="common-pointer sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/faqs")}
            >
              FAQs
            </Text>
            <Button
              className="common-pointer cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[600px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/signin")}
              color="purple_200"
              size="md"
              variant="fill"
            >
              Sign Out
            </Button>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[119px] mt-14 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
          size="txtJudsonBold40"
        >
          Register New Organization
        </Text>
        <div className="flex flex-col md:gap-10 gap-[351px] items-center mt-[47px] w-full">
          <div className="bg-purple-200_7f flex flex-col items-start justify-start max-w-[1275px] mx-auto p-[43px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[66px] justify-start mb-12 md:ml-[0] ml-[13px] w-[91%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtJudsonRegular40"
              >
                What best describes your organization?
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[90px] w-[92%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer bg-white-A700 border border-gray-900 border-solid flex flex-1 flex-col gap-[11px] items-center justify-end sm:ml-[0] p-[22px] sm:px-5 w-full"
                    onClick={() => navigate("/registertwo")}
                  >
                    <Img
                      className="h-20 mt-[5px] w-20"
                      src="images/img_maximize.svg"
                      alt="maximize"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtJudsonRegular24Black900"
                    >
                      Nonprofit
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 border border-gray-900 border-solid flex flex-1 flex-col gap-[19px] items-center justify-end sm:ml-[0] p-6 sm:px-5 w-full"
                    onClick={() => navigate("/registertwo")}
                  >
                    <Img
                      className="h-[70px] mt-[3px]"
                      src="images/img_fasolidschool.svg"
                      alt="fasolidschool"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtJudsonRegular24Black900"
                    >
                      Public School
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 border border-gray-900 border-solid flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[11px] w-full"
                    onClick={() => navigate("/registertwo")}
                  >
                    <Img
                      className="h-[70px] mt-[17px]"
                      src="images/img_bxsschool.svg"
                      alt="bxsschool"
                    />
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-[63%] sm:w-full"
                      size="txtJudsonRegular24Black900"
                    >
                      School affiliated Nonprofit
                    </Text>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-[54px] items-center justify-start mt-[49px] w-[65%] md:w-full">
                  <div
                    className="common-pointer bg-white-A700 border border-gray-900 border-solid flex flex-col gap-3 items-center justify-end p-[21px] sm:px-5 w-[46%] md:w-full"
                    onClick={() => navigate("/registertwo")}
                  >
                    <Img
                      className="h-20 mt-1.5 w-20"
                      src="images/img_mingcutegovernmentline.svg"
                      alt="mingcutegovernm"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtJudsonRegular24Black900"
                    >
                      Government Agency
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-white-A700 border border-gray-900 border-solid flex flex-col items-center justify-start p-7 sm:px-5 w-[46%] md:w-full"
                    onClick={() => navigate("/registertwo")}
                  >
                    <Img
                      className="h-20 w-20"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="my-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtJudsonRegular24Black900"
                    >
                      Private School
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border-2 border-gray-900 border-solid flex md:flex-col flex-row gap-[42px] items-center justify-start mt-[60px] p-[34px] sm:px-5 w-full">
                  <Img
                    className="h-20 md:ml-[0] ml-[23px] w-20"
                    src="images/img_ricustomerservicefill.svg"
                    alt="ricustomerservi"
                  />
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                    size="txtJudsonRegular30Gray500"
                  >
                    <>
                      Your organization is not listed or need help?
                      <br />
                      Contact Customer Service
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RegisterOrgPage;
