import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";


import axios from "axios";

const RegisterThreePage = () => {
  const navigate = useNavigate();
  const [organizationname, setOrganizationName] = useState("");


  const handleConfirmation = async () => {
    if (!organizationname.trim()) {
      alert("Please enter organization name");
      return;
    }
    try {
      // Send a POST request to store username in the database
      const response = await axios.post('http://localhost:3001/registerthree', {
        organizationname: organizationname
        
      });
      if (response.status === 200) {
        console.log('Data stored successfully:', response.data);

        // Navigate to the next page
        navigate("/registerfour");
      } else {
        console.error('Error storing data:', response.data.error);
        alert('Failed to store data. Please try again later.'); // Provide feedback to the user

      }
    } catch (error) {
      console.error('Error storing data:', error);
      alert('An unexpected error occurred. Please try again later.'); // Provide feedback to the user

    }
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
              className="common-pointer cursor-pointer leading-[normal] mb-[23px] min-w-[186px] sm:ml-[0] ml-[344px] sm:mt-0 mt-[43px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
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
          className="md:ml-[0] ml-[127px] mt-[27px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
          size="txtJudsonBold40"
        >
          Organization Confirmation
        </Text>
        <div className="flex flex-col md:gap-10 gap-[283px] items-center mt-12 w-full">
          <div className="bg-purple-200_87 flex flex-col gap-[49px] items-start justify-start max-w-[1275px] mx-auto p-9 md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[11px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              Confirm your organization
            </Text>
            <div className="flex flex-col md:ml-[0] ml-[11px] relative w-[98%] md:w-full">
              <div className="md:h-[183px] h-[218px] mx-auto w-full">
              <input
  type="text"
  value={organizationname}
        onChange={(e) => setOrganizationName(e.target.value)}
  placeholder="New English Brewing - San Diego Brewery"
  className="absolute bg-gray-300 border-2 border-gray-900 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-[21px] sm:px-5 rounded-[15px] top-[0] w-full mb-[103px] ml-3 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
/>

                
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Button
    className="common-pointer border-2 border-black-900 border-solid cursor-pointer leading-[normal] min-w-[129px] mt-[-0.05px] rounded-lg sm:text-[25px] md:text-[27px] text-[29px] text-center z-[1]"
    onClick={() => navigate("/registertwo")}
    shape="round"
    color="gray_300"
    size="xs"
    variant="fill"
  >
    Go Back
  </Button>

  <Button
    className="common-pointer border-2 border-gray-900 border-solid cursor-pointer leading-[normal] min-w-[129px] mt-[-0.05px] rounded-lg sm:text-[25px] md:text-[27px] text-[29px] text-center z-[1]"
    onClick={handleConfirmation}
    shape="round"
    color="gray_300"
    size="xs"
    variant="fill"
  >
    Confirm
  </Button>
</div>

            </div>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RegisterThreePage;
