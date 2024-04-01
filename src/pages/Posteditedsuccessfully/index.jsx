import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const PosteditedsuccessfullyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-700 flex flex-col font-judson items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-600_87 flex flex-col md:gap-10 gap-16 justify-start max-w-[1092px] mx-auto p-[17px] md:px-5 rounded-[15px] w-full">
          <Img
            className="common-pointer h-6 md:ml-[0] ml-[1019px] w-6"
            src="images/img_gridiconscross.svg"
            alt="gridiconscross"
            onClick={() => navigate("/userdashboardtwo")}
          />
          <Text
            className="mb-[75px] md:ml-[0] ml-[145px] mr-[204px] md:text-5xl text-[64px] text-white-A700"
            size="txtJudsonBold64"
          >
            Post Edited Successfully!!!
          </Text>
        </div>
      </div>
    </>
  );
};

export default PosteditedsuccessfullyPage;
