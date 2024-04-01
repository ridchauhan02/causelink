import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const OppdetailsPage = () => {
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
        <div className="h-[1320px] sm:h-[1377px] md:h-[1783px] max-w-[1275px] mt-[62px] mx-auto md:px-5 relative w-full">
          
          <div className="h-[1320px] sm:h-[1377px] md:h-[1783px] max-w-[1275px] mt-[62px] mx-auto md:px-5 relative w-full">
        
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col gap-[33px] h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group8.svg')" }}
          >
          <div className="w-[1512px] h-[2067px] left-[30px] top-[-160px] relative bg-indigo-950">
  
  <div className="w-[259px] h-[46px] left-[610px] top-[201px] absolute text-white-A700 text-[40px] font-bold font-['Judson']">CONNECTFOR</div>
  <div className="w-[513px] h-[46px] left-[483px] top-[362px] absolute text-white-A700 text-[40px] font-normal font-['Judson']">Recruiting through Dec 31st</div>
  <div className="w-[513px] h-[46px] left-[144px] top-[580px] absolute text-white-A700 text-[32px] font-normal font-['Judson']">Opportunity Details</div>
  <div className="w-[138px] h-[46px] left-[220px] top-[632px] absolute text-white-A700 text-2xl font-normal font-['Judson']">Ongoing</div>
  <div className="w-[138px] h-[46px] left-[220px] top-[681px] absolute text-white-A700 text-2xl font-normal font-['Judson']">In-Person</div>
  <div className="w-[306px] h-[46px] left-[220px] top-[727px] absolute text-white-A700 text-2xl font-normal font-['Judson']">Recruiting through Dec 31st</div>
  <div className="w-[306px] h-[46px] left-[219px] top-[775px] absolute text-white-A700 text-2xl font-normal font-['Judson']">Sarkhej - Gandhinagar Highway, Ahmedabad, <br/>380051, IN</div>
  <div className="w-[820px] h-[46px] left-[537px] top-[626px] absolute text-white-A700 text-[32px] font-normal font-['Judson']">The collection involves the conduction of collection drives with potential stakeholders through making arrangements such as coordination, preparation of collection boxes, placement of boxes, orientations in cases of educational institutes, and transportation (before & after collection).</div>
  <div className="w-[823px] h-[474px] left-[534px] top-[824px] absolute text-white-A700 text-[32px] font-normal font-['Judson']">Sort collected items such as clothes, footwear, books, stationery, home utility decor, etc. into various categories. All volunteers have their own unique delight in sorting items as some are interested in knowing about new books or CDs, some in knowing about various cloth pieces or accessories, some are interested in games & toys, etc. which makes this process exciting to each volunteer.<br/><br/>Duration 2 months<br/><br/>Frequency: 3 hours weekly<br/><br/>Mode: Offline in Ahmedabad<br/></div>
  <div className="w-[1258px] h-[46px] left-[141px] top-[259px] absolute text-white-A700 text-[64px] font-bold font-['Judson']">Material collection and sorting volunteer</div>
  <div className="w-[443px] h-[46px] left-[537px] top-[572px] absolute text-white-A700 text-[40px] font-bold font-['Judson']">About this Opportunity</div>
  <div className="w-[732px] h-[46px] left-[531px] top-[1324px] absolute text-white-A700 text-[32px] font-bold font-['Judson']">Note: This is an unpaid volunteering opportunity.</div>
  <div className="w-[468px] h-[74px] left-[506px] top-[445px] absolute">
  <button 
   onClick={() => navigate("/emailsuccessfully")}

  color="purple_200" className="w-[468px] h-[74px] left-0 top-0 absolute  rounded-[37px] border border-indigo-950">
  <span className="text-white-A700 text-[40px] font-bold font-['Judson']">Express Interest</span>
</button>
  </div>
</div>
  
          </div>
        </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-[189px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default OppdetailsPage;