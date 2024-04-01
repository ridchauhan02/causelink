import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Img } from "components";
import Footer from "components/Footer";
import axios from "axios"; // Import Axios for making HTTP requests

const UsernamePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [ageAccepted, setAgeAccepted] = useState(false);
  const [additionalCommunications, setAdditionalCommunications] = useState(false);

  const handleSubmit = async () => {
    // Perform validation
    if (!username || !termsAccepted || !ageAccepted || !additionalCommunications) {
      alert("Please fill in all fields and accept all terms.");
      return;
    }

    try {
      // Send a POST request to store username in the database
      const response = await axios.post('http://localhost:3001/username', {
        username: username
        
      });
      if (response.status === 201) {
        console.log('Data stored successfully:', response.data);

        // Navigate to the next page
        navigate("/registerorg");
      } else {
        console.error('Error storing data:', response.data.error);
      }
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

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
            Sign In
          </Button>
        </div>

        <div className="bg-purple-200 flex flex-col gap-[15px] items-center justify-center mt-[97px] p-[35px] md:px-5 rounded-[50px] w-[54%] md:w-full">
          <Text
            className="mt-[41px] md:text-5xl text-[70px] text-black-900"
            size="txtJudsonBold70"
          >
            Complete your account
          </Text>
          <div className="flex flex-col items-start justify-start mb-9 w-[74%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
              size="txtJudsonRegular24Black900"
            >
              In order to continue, please complete your account.
            </Text>
            <input
          type="text"
          placeholder="Username"
          className="bg-white-A700 h-[60px] mt-[39px] rounded-[15px] w-[99%]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[25px] mt-[37px] w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-[86%] md:w-full">
                <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mb-[29px] sm:mt-0 mt-[9px] outline-black-900 rounded shadow-bs"
          />
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[94%] sm:w-full"
            size="txtJudsonRegular24Black900"
          >
            Accept the Points of Light Terms and Conditions
          </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start w-[55%] md:w-full">
                <input
            type="checkbox"
            checked={ageAccepted}
            onChange={(e) => setAgeAccepted(e.target.checked)}
            className="mb-[29px] sm:mt-0 mt-[9px] outline-black-900 rounded shadow-bs"
          />
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-[90%] sm:w-full"
                    size="txtJudsonRegular24Black900"
                  >
                    I am 13 years of age or older.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-0.5 w-full">
                <input
            type="checkbox"
            checked={additionalCommunications}
            onChange={(e) => setAdditionalCommunications(e.target.checked)}
            className="mb-[29px] sm:mt-0 mt-[9px] outline-black-900 rounded shadow-bs"
          />
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtJudsonRegular24Black900"
                  >
                    <>
                      Receive additional communications from <br />
                      Points of Light
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[468px] sm:min-w-full md:ml-[0] ml-[120px] mt-9 rounded-[37px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={handleSubmit}
              color="deep_purple_300"
              size="xl"
              variant="fill"
            >
              Submit
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-600 flex items-center justify-center mt-[52px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default UsernamePage;
