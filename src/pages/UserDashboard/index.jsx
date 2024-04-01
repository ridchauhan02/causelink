import React, { useEffect } from 'react';

import { Link, useSearchParams,useNavigate } from "react-router-dom";

import { Button, Img, Line, Switch, Text } from "components";
import Footer from "components/Footer";

const UserDashboardPage = ({ users, deleteUser, fetchUsers }) => {
  const navigate = useNavigate();

  const editUser = (id) => {
    navigate(`/edit-user/${id}`);
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[78px] w-full">
            <Img
              className="md:flex-1 h-[132px] sm:h-auto object-cover w-[13%] md:w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
            <Text
              className="common-pointer md:ml-[0] ml-[43px] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/hometwo")}
            >
              Home
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[41px] md:mt-0 mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/")}
            >
              Search
            </Text>
            <Text
              className="md:ml-[0] ml-[38px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
            >
              My Dashboard
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[34px] md:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtJudsonRegular30WhiteA700"
              onClick={() => navigate("/faqs")}
            >
              FAQs
            </Text>
            
            <Button
  className="common-pointer cursor-pointer leading-[normal] mb-[21px] min-w-[186px] ml-auto md:ml-[0] md:mt-0 mt-[45px] rounded-[32px] text-3xl sm:text-[26px] md:text-[28px] text-center"
  onClick={() => navigate("/signin")}
  color="purple_200"
  size="md"
  variant="fill"
>
  Sign Out
</Button>

          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[39px] mt-[29px] md:px-5 w-[59%] md:w-full">
          <Button
          className="common-pointer cursor-pointer font-judson leading-[normal] mb-[17px] min-w-[220px] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"
          onClick={() => navigate("/add-user")} // Change the navigate path to "/add-user"
          color="purple_200"
          size="md"
          variant="fill"
          >
          <Link
             to="/add-user"
              className="common-pointer cursor-pointer font-judson leading-[normal] mb-[17px] min-w-[220px] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"

              color="purple_200"
              size="md"
              variant="fill"
            >
              New Post
            </Link>
          </Button>

            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtKadwaBold50"
            >
              CONNECTFOR
            </Text>
          </div>
          <Line className="bg-white-A700_87 h-0.5 mt-[13px] w-full" />
          
          <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
        
          {users?.length ? (
  users.map((user) => (
    <div className="md:ml-[0] ml-[420px] mt-[65px] flex flex-col items-start py-3.5 pr-20 pl-7 rounded-2xl bg-purple-200 max-w-[924px] max-md:px-5" key={user._id}>
      <div className="flex gap-5 justify-between items-start self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start text-black max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">{user.title}</div>
          <div className="mt-3 text-xl max-md:max-w-full">{user.mode}</div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-6">
          <button onClick={() => editUser(user._id)}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba90de6e47a8e05c72c7f92c324b16cc2f9cb3a3b4c6b61793563eaa490df2d?" className="w-10 aspect-square" />
          </button>
          <button onClick={() => deleteUser(user._id)}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5357f27f3e132d98c28b1f6ba543a0bcc9aca6c7ec0e39d531ae1de2af40bcb9?" className="w-10 aspect-square" />
          </button>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa03e8b0c23e3e2976bdd4a6d14db7e399aabce4a7e9aef7cd5c7f185a9fd5d6?" className="w-5 aspect-square" />
        <div className="self-start mt-1.5">{user.address}</div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e31f2fb73717a9e968ee2c3f6b6b7427b3b1297ee498c918ce9740517ef645?" className="w-5 aspect-square" />
        <div>{user.duration}</div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5043110ad34b8f61c2948bf9bede9f24f532c92417709af385a78f56d94c4083?" className="self-start w-5 aspect-square" />
        <div className="flex-auto">Recruiting Through {user.date}</div>
      </div>
    </div>
  ))
) : (
  <div className="md:ml-[0] ml-[573px] mt-[183px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700_99" size="txtJudsonBold50WhiteA70099" rowSpan={10} colSpan={10}>
    No Recent Post
  </div>
)}
</div></div>

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

export default UserDashboardPage;