/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img,  Line, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const UserDashboardTwoPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete post?');

    // If the user confirms, navigate to the next page
    if (isConfirmed) {
      navigate("/userdashboardthree");
    }
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-judson items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-600 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[39px] mt-[29px] md:px-5 w-[59%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-judson leading-[normal] mb-[17px] min-w-[220px] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              onClick={() => navigate("/fornewposttwo")}
              color="purple_200"
              size="lg"
              variant="fill"
            >
              New Post
            </Button>
            <Text
              className="md:ml-[0] ml-[80px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtKadwaBold50"
            >
              CONNECTFOR
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[880px] mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonBold30WhiteA700"
          >
            Recent Posts
          </Text>
          
          <div className="md:ml-[0] ml-[500px] mt-[65px] flex flex-col items-start py-3.5 pr-20 pl-7 rounded-2xl bg-purple-200 max-w-[924px] max-md:px-5">
      <div className="flex gap-5 justify-between items-start self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start text-black max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">
            Material collection and sorting volunteer
          </div>
          <div className="mt-3 text-xl max-md:max-w-full">ConnectFor</div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-6">
        <button
        onClick={() => navigate("/editpost")}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba90de6e47a8e05c72c7f92c324b16cc2f9cb3a3b4c6b61793563eaa490df2d?"
        className="w-10 aspect-square"
        />
        </button>
        
        <button
        onClick={handleButtonClick}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5357f27f3e132d98c28b1f6ba543a0bcc9aca6c7ec0e39d531ae1de2af40bcb9?"
        className="w-10 aspect-square"
        />
        </button>

        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa03e8b0c23e3e2976bdd4a6d14db7e399aabce4a7e9aef7cd5c7f185a9fd5d6?"
          className="w-5 aspect-square"
        />
        <div className="self-start mt-1.5">Ahmedabad</div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e31f2fb73717a9e968ee2c3f6b6b7427b3b1297ee498c918ce9740517ef645?"
          className="w-5 aspect-square"
        />
        <div>120 Miles </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5043110ad34b8f61c2948bf9bede9f24f532c92417709af385a78f56d94c4083?"
          className="self-start w-5 aspect-square"
        />
        <div className="flex-auto">Recruiting through Dec 31st</div>
      </div>
    </div>


    <div className="md:ml-[0] ml-[500px] mt-[65px] flex flex-col items-start py-3.5 pr-20 pl-7 rounded-2xl bg-purple-200 max-w-[924px] max-md:px-5">
      <div className="flex gap-5 justify-between items-start self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start text-black max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">
            Material collection and sorting volunteer
          </div>
          <div className="mt-3 text-xl max-md:max-w-full">ConnectFor</div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-6">
        <button
        onClick={() => navigate("/editpost")}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba90de6e47a8e05c72c7f92c324b16cc2f9cb3a3b4c6b61793563eaa490df2d?"
        className="w-10 aspect-square"
        />
        </button>
        
        <button
        onClick={handleButtonClick}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5357f27f3e132d98c28b1f6ba543a0bcc9aca6c7ec0e39d531ae1de2af40bcb9?"
        className="w-10 aspect-square"
        />
        </button>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa03e8b0c23e3e2976bdd4a6d14db7e399aabce4a7e9aef7cd5c7f185a9fd5d6?"
          className="w-5 aspect-square"
        />
        <div className="self-start mt-1.5">Ahmedabad</div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e31f2fb73717a9e968ee2c3f6b6b7427b3b1297ee498c918ce9740517ef645?"
          className="w-5 aspect-square"
        />
        <div>120 Miles </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5043110ad34b8f61c2948bf9bede9f24f532c92417709af385a78f56d94c4083?"
          className="self-start w-5 aspect-square"
        />
        <div className="flex-auto">Recruiting through Dec 31st</div>
      </div>
    </div>


    <div className="md:ml-[0] ml-[500px] mt-[65px] flex flex-col items-start py-3.5 pr-20 pl-7 rounded-2xl bg-purple-200 max-w-[924px] max-md:px-5">
      <div className="flex gap-5 justify-between items-start self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start text-black max-md:max-w-full">
          <div className="text-3xl max-md:max-w-full">
            Material collection and sorting volunteer
          </div>
          <div className="mt-3 text-xl max-md:max-w-full">ConnectFor</div>
        </div>
        <div className="flex gap-5 justify-between self-end mt-6">
          <button
        onClick={() => navigate("/editpost")}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba90de6e47a8e05c72c7f92c324b16cc2f9cb3a3b4c6b61793563eaa490df2d?"
        className="w-10 aspect-square"
        />
        </button>
        
        <button
        onClick={handleButtonClick}
        >
        <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5357f27f3e132d98c28b1f6ba543a0bcc9aca6c7ec0e39d531ae1de2af40bcb9?"
        className="w-10 aspect-square"
        />
        </button>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa03e8b0c23e3e2976bdd4a6d14db7e399aabce4a7e9aef7cd5c7f185a9fd5d6?"
          className="w-5 aspect-square"
        />
        <div className="self-start mt-1.5">Ahmedabad</div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e31f2fb73717a9e968ee2c3f6b6b7427b3b1297ee498c918ce9740517ef645?"
          className="w-5 aspect-square"
        />
        <div>120 Miles </div>
      </div>
      <div className="flex gap-5 justify-between mt-2 text-xl text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5043110ad34b8f61c2948bf9bede9f24f532c92417709af385a78f56d94c4083?"
          className="self-start w-5 aspect-square"
        />
        <div className="flex-auto">Recruiting through Dec 31st</div>
      </div>
    </div>
          <Footer className="bg-gray-600 flex items-center justify-center mt-[157px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UserDashboardTwoPage;