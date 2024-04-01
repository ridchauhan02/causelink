import React, { useEffect, useState } from 'react';

import { Link, useSearchParams,useNavigate } from "react-router-dom";

import { Button, Img,List, Line,Radio,RadioGroup,SelectBox, Switch, Text } from "components";
import Footer from "components/Footer";
const issueOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const skillOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const featuresOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SearchPage = ({ users, deleteUser, fetchUsers }) => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  const editUser = (id) => {
    navigate(`/edit-user/${id}`);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    const filteredUsers = users.filter(user => {
      const matchesKeyword = user.title.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesLocation = user.address.toLowerCase().includes(searchLocation.toLowerCase());
      
      // If search fields are empty, return true to include all users
      if (searchKeyword === '' && searchLocation === '') {
        return true;
      }
      
      return matchesKeyword && matchesLocation;
    });

    setFilteredUsers(filteredUsers);
  }, [users, searchKeyword, searchLocation]);

  // Handle search button click
  const handleSearch = () => {
    // Perform search filtering based on searchKeyword and searchLocation
    // This will be automatically handled by the useEffect hook
  };



  return (
    <>
   <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[264px] md:h-[270px] sm:h-[461px] md:px-5 relative w-full">
            <div className="absolute bg-gray-600 bottom-[0] h-[131px] inset-x-[0] mx-auto w-full"></div>
            <div className="absolute bottom-[0] h-24 md:h-[270px] inset-x-[0] mx-auto w-full">
              
              
              
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-start w-[72%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-[80%] md:w-full">
                    <input
                     type="text"
                    placeholder="Keyword"
                    onChange={(e) => setSearchKeyword(e.target.value)}

                    className="bg-white-A700 border-2 border-gray-600 border-solid h-[62px] justify-center max-w-[645px] md:max-w-full pb-2.5 pt-4 sm:px-5 px-[35px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_87 w-full"
                    />
                    <input
                    type="text"
                    placeholder="Location"
                    onChange={(e) => setSearchLocation(e.target.value)}

                    className="bg-white-A700 border-2 border-gray-600 border-solid h-[62px] justify-center sm:px-5 px-[34px] py-[13px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_87 w-[398px]"
                    />
                    </div>
                    <div className="bg-purple-200 border-2 border-deep_purple-300 border-solid flex flex-row items-center justify-center p-3 rounded-[10px] w-[21%] md:w-full">
                    <button
                      className="bg-purple-200    flex items-center justify-center p-3 rounded-[10px] text-3xl sm:px-5 px-[10px] py-[0px] sm:text-[26px] md:text-[28px] text-black-900_87 w-[10%]  cursor-pointer"
                      type="button"
                      onClick={handleSearch}
                    >
                        Search
                    </button>
                     
                    </div>
                  </div>
                  <Line className="bg-white-A700 h-px w-full" />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
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
              <Line className="bg-white-A700 h-px mt-0.5 w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[1372px] mt-9 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start py-[26px] rounded-[15px] w-[38%] md:w-full">
              <div className="flex flex-col gap-7 items-center justify-start mb-[107px] w-full">
                <div className="flex flex-row items-start justify-between w-[85%] md:w-full">
                  <Text
                    className="mb-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_87"
                    size="txtJudsonRegular30"
                  >
                    Active filters
                  </Text>
                  <Text
                    className="mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_71 underline"
                    size="txtJudsonRegular30Black90071"
                  >
                    Clear filters
                  </Text>
                </div>
                <div className="flex flex-col justify-start w-full">
                  <Line className="bg-black-900_87_01 h-px w-full" />
                  <Line className="bg-black-900_87_01 h-px mt-10 w-full" />
                  <Text
                    className="md:ml-[0] ml-[35px] mt-[19px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900_87"
                    size="txtJudsonRegular27"
                  >
                    In-person or Remote:
                  </Text>
                  <RadioGroup
                    className="flex flex-col md:ml-[0] ml-[35px] mt-6 w-[26%]"
                    name="radiogroupremote"
                  >
                    <Radio
                      value="Remote"
                      className="leading-[normal] mr-3.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupremote"
                      label="Remote"
                      id="Remote"
                    ></Radio>
                    <Radio
                      value="Inperson"
                      className="leading-[normal] mt-[29px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupremote"
                      label="Inperson"
                      id="Inperson"
                    ></Radio>
                    <Radio
                      value="All"
                      className="leading-[normal] mr-[68px] mt-[26px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupremote"
                      label="All"
                      id="All"
                    ></Radio>
                  </RadioGroup>
                  <Line className="bg-black-900_87_01 h-px mt-[33px] w-full" />
                  <Text
                    className="md:ml-[0] ml-[35px] mt-[22px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900_87"
                    size="txtJudsonRegular27"
                  >
                    Commitment:
                  </Text>
                  <RadioGroup
                    className="flex flex-col md:ml-[0] ml-[35px] mt-[29px] w-[32%]"
                    name="radiogroupongoing"
                  >
                    <Radio
                      value="Ongoing"
                      className="leading-[normal] mr-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupongoing"
                      label="Ongoing"
                      id="Ongoing"
                    ></Radio>
                    <Radio
                      value="Event"
                      className="leading-[normal] mr-16 mt-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupongoing"
                      label="Event"
                      id="Event"
                    ></Radio>
                    <Radio
                      value="AmeriCorps"
                      className="leading-[normal] mt-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupongoing"
                      label="AmeriCorps"
                      id="AmeriCorps"
                    ></Radio>
                    <Radio
                      value="All"
                      className="leading-[normal] mr-24 mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-left"
                      inputClassName="border border-black-900_99 border-solid h-5 mr-[5px] w-5"
                      checked={false}
                      name="radiogroupongoing"
                      label="All"
                      id="All2"
                    ></Radio>
                  </RadioGroup>
                  <Line className="bg-black-900_87_01 h-px mt-[26px] w-full" />
                  <SelectBox
                    className="leading-[normal] md:ml-[0] ml-[35px] mt-[21px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900_87 text-left w-[31%] sm:w-full"
                    placeholderClassName="text-black-900_87"
                    indicator={
                      <Img
                        className="h-[33px] mr-[0] w-[33px]"
                        src="images/img_icoutlinearrowdropdown.svg"
                        alt="ic:outline-arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="issue"
                    options={issueOptionsList}
                    isSearchable={false}
                    placeholder="Issue Area"
                  />
                  <Line className="bg-black-900_87_01 h-px mt-5 w-full" />
                  <SelectBox
                    className="leading-[normal] md:ml-[0] ml-[35px] mt-[21px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900_87 text-left w-[35%] sm:w-full"
                    placeholderClassName="text-black-900_87"
                    indicator={
                      <Img
                        className="h-[33px] mr-[0] w-[33px]"
                        src="images/img_icoutlinearrowdropdown.svg"
                        alt="ic:outline-arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="skill"
                    options={skillOptionsList}
                    isSearchable={false}
                    placeholder="Skill Interest"
                  />
                  <Line className="bg-black-900_87_01 h-px mt-[19px] w-full" />
                  <SelectBox
                    className="leading-[normal] md:ml-[0] ml-[35px] mt-[22px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900_87 text-left w-[26%] sm:w-full"
                    placeholderClassName="text-black-900_87"
                    indicator={
                      <Img
                        className="h-[33px] mr-[0] w-[33px]"
                        src="images/img_icoutlinearrowdropdown.svg"
                        alt="ic:outline-arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="features"
                    options={featuresOptionsList}
                    isSearchable={false}
                    placeholder="Features"
                  />
                </div>
              </div>
            </div>
            <div className="flex  md:flex-1 flex-col gap-[34px] items-center justify-start w-[59%] md:w-full md:mt-[20px] mt-[-280px]">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-100"
                  size="txtJudsonBold50"
                >
                  Volunteer Opportunities
                </Text>
                <div className="flex flex-col gap-[19px] justify-start w-full">
                  <Text
                    className="ml-2.5 md:ml-[0] text-blue_gray-100 text-xl"
                    size="txtJudsonRegular20"
                  >
                    1,250 results
                  </Text>
                  <Line className="bg-white-A700_87 h-px w-full" />
                </div>
              </div>
              <Line className="bg-white-A700_87 h-0.5 mt-[13px] w-full" />
          
          <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                 {/* {users?.length ? (
                    users.map((user) => ( */}
                    {filteredUsers.length ? (
                    filteredUsers.map((user) => (
                <div  key={user.id}className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-4 rounded-[15px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mt-[5px] w-[98%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                      size="txtJudsonRegular30Black90001"
                    >
                      {user.title}
                    </Text>
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtJudsonRegular20Black90001"
                    >
                      {user.mode}
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Img
                        className="h-[29px] sm:mt-0 mt-[11px]"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <Text
                        className="sm:mt-0 mt-[11px] text-black-900_01 text-xl"
                        size="txtJudsonRegular20Black90001"
                      >
                        {user.address}
                      </Text>
                      <Img
                        className="h-[29px] sm:mt-0 mt-[11px]"
                        src="images/img_mdiweb.svg"
                        alt="mdiweb"
                      />
                      <Text
                        className="sm:mt-0 mt-[11px] text-black-900_01 text-xl"
                        size="txtJudsonRegular20Black90001"
                      >
                       {user.duration}{" "}
                      </Text>
                      <Img
                        className="h-[29px] sm:mt-0 mt-[11px]"
                        src="images/img_uilcalender.svg"
                        alt="uilcalender"
                      />
                      <Text
                        className="sm:mt-0 mt-3.5 text-black-900_01 text-xl"
                        size="txtJudsonRegular20Black90001"
                      >
                        Recruiting through {user.date}
                      </Text>
                      <Button
                        className="common-pointer !text-black-900_01 border-2 border-deep_purple-300 border-solid cursor-pointer leading-[normal] min-w-[162px] text-[15px] text-center"
                        onClick={() => navigate("/oppdetails")}
                        shape="round"
                        color="purple_200"
                        size="sm"
                        variant="fill"
                      >
                        View Oppurtunity
                      </Button>
                    </div>
                  </div>
                </div>
               
               ))
               ) :(
                <div className="md:ml-[0] ml-[573px] mt-[183px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700_99" size="txtJudsonBold50WhiteA70099" rowSpan={10} colSpan={10}>
                  No Recent Post
                </div>
              )}
              </List>
            </div>
          </div>

          {/* <Text
            className="common-pointer md:ml-[0] ml-[573px] mt-[183px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700_99"
            size="txtJudsonBold50WhiteA70099"
            onClick={() => navigate("/")}
          >
            No Recent Posts
          </Text> */}
          <Footer className="bg-gray-600 flex items-center justify-center mt-[459px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SearchPage;