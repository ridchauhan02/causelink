import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const PostsuccessfullyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-700 flex flex-col font-judson items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-600_87 flex flex-col gap-[58px] items-center justify-start max-w-[1092px] mx-auto p-[17px] md:px-5 rounded-[15px] w-full">
          <Img
            className="common-pointer h-6 w-6"
            src="images/img_gridiconscross.svg"
            alt="gridiconscross"
            onClick={() => navigate("/userdashboardtwo")}
          />
          <Text
            className="mb-[81px] md:text-5xl text-[64px] text-white-A700"
            size="txtJudsonBold64"
          >
            Posted Successfully!!!
          </Text>
        </div>
      </div>
    </>
  );
};

export default PostsuccessfullyPage;
