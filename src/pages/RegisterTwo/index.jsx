import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";

// Define your list of schools (can be fetched from an API or hardcoded)
const schoolsList = [
  "Woodward Academy",
  "The North school",
  "Ali Baba School",
  "Greatest School",

  // Add more schools as needed
];

const RegisterTwoPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");

  // Filter the list of schools based on searchQuery
  const filteredSchools = schoolsList.filter((school) =>
    school.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSchoolSelection = (school) => {
    setSelectedSchool(school);
    setSearchQuery(""); // Clear search query
  };

  const handleNext = () => {
    if (selectedSchool) {
      // If a school is selected, navigate to the next page
      navigate("/registerthree");
    } else {
      alert("Please select a school.");
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

          <Text
            className="mt-[27px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
            size="txtJudsonBold40"
          >
            Register New Private School
          </Text>
          <div className="bg-purple-200_87 flex flex-col items-start justify-start max-w-[1275px] mt-12 mx-auto p-[34px] md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[13px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtJudsonBold40"
            >
              Let’s find your school
            </Text>
            <Text
              className="md:ml-[0] ml-[13px] mt-12 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJudsonRegular24"
            >
              School Name (E.g. Woodward Academy)
            </Text>
            {/* <textarea
  className="bg-gray-300 border-2 border-gray-900 border-solid h-[78px] mb-[65px] md:ml-[0] ml-[13px] mt-[25px] rounded-[15px] w-[98%]"
  placeholder="Your School Name"
></textarea> */}
<input
              type="text"
              value={selectedSchool || searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a school..."
              className="bg-gray-300 border-2 border-gray-900 border-solid h-[42px] mb-[20px] md:ml-[0] ml-[13px] mt-[25px] rounded-[15px] w-[98%] px-3"
            />
            {/* Display filtered schools only if searchQuery is not empty */}
            {searchQuery && (
              <ul>
                {filteredSchools.map((school, index) => (
                  <li
                    key={index}
                    onClick={() => handleSchoolSelection(school)}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    {school}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-row gap-[22px] items-center justify-end mt-[23px] md:px-5 w-[16%] md:w-full">
            <Button
              className="common-pointer border-[3px] border-purple-200 border-solid cursor-pointer leading-[normal] min-w-[105px] rounded-lg sm:text-[25px] md:text-[27px] text-[29px] text-center"
              onClick={() => navigate("/registerorg")}
              shape="round"
              color="gray_300"
              size="xs"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer border-[3px] border-purple-200 border-solid cursor-pointer leading-[normal] min-w-[105px] rounded-lg sm:text-[25px] md:text-[27px] text-[29px] text-center"
              onClick={handleNext}
              shape="round"
              color="gray_300"
              size="xs"
              variant="fill"
            >
              Next
            </Button>
          </div>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[285px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RegisterTwoPage;
