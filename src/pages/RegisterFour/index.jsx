import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const RegisterFourPage = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(""); // State to hold user input
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  // Define the list of numbers
  const numberList = [12567];

  // Function to handle form submission
  const handleSubmit = () => {
    // Convert user input string to an array of integers
    const userNumbers = userInput.split(",").map((num) => parseInt(num.trim()));

    // Validate whether user input matches the predefined list of numbers
    const isValid = userNumbers.length === numberList.length && userNumbers.every((value, index) => value === numberList[index]);

    if (isValid) {
      // Navigate to the next page if input matches
      navigate("/registerfive");
    } else {
      // Display error message if input doesn't match
      setErrorMessage("Numbers do not match. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-start justify-start mx-auto pb-[86px] w-full">
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
          className="md:ml-[0] ml-[127px] mt-6 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
          size="txtJudsonBold40"
        >
          Private School Verification
        </Text>
        <div className="flex flex-col md:gap-10 gap-[338px] items-center mt-[51px] w-full">
          <div className="bg-purple-200_87 flex flex-col gap-[17px] items-start justify-center max-w-[1275px] mx-auto p-[26px] md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[46px] mt-[46px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              Verify your private school
            </Text>
            <Text
              className="md:ml-[0] ml-[50px] mt-12 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJudsonRegular24"
            >
              School Name (E.g. Woodward Academy)
            </Text>
               
               
                
            <div className="h-[158px] mb-14 md:ml-[0] ml-[47px] relative w-[97%] md:w-full">
              
              {/* <div className="h-[148px] md:h-[94px] mb-[-54px] w-[79%] md:w-full z-[1]">
              

                <Text
                  className="absolute bottom-[6%] left-[4%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtJudsonRegular24Black900"
                >
                  Enter NCES School ID...
                </Text>
              </div> */}
              <div style={{ position: 'relative' }}>
  <input
    type="text"
    placeholder="Enter Your id Number......."
    value={userInput}
    onChange={(e) => setUserInput(e.target.value)}
    className="absolute bg-gray-300 border-2 border-gray-900 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-[21px] sm:px-5 rounded-[15px] top-[0] w-full mb-[103px] ml-3 md:ml-[0] ml-[-5px]  md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
  />
              {errorMessage && <Text className="text-red-500">{errorMessage}</Text>}
  <Button
    className="common-pointer border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[164px] text-3xl sm:text-[26px] md:text-[28px] text-center"
    onClick={handleSubmit}
    shape="round"
    color="purple_200"
    size="md"
    variant="fill"
    style={{ position: 'absolute', top: 17, right: 10, marginTop: '-10px' }}
  >
    Submit
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

export default RegisterFourPage;