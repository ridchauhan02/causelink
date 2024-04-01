import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DeletesuccessfullyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-700 flex flex-col font-judson items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-600_87 flex flex-col gap-14 justify-start max-w-[1092px] mx-auto p-[17px] md:px-5 rounded-[15px] w-full">
          <Img
            className="common-pointer h-6 md:ml-[0] ml-[1019px] w-6"
            src="images/img_gridiconscross.svg"
            alt="gridiconscross"
            onClick={() => navigate("/userdashboardthree")}
          />
          <Text
            className="mb-[83px] ml-36 md:ml-[0] mr-[187px] md:text-5xl text-[64px] text-white-A700"
            size="txtJudsonBold64"
          >
            Post Deleted Successfully!!
          </Text>
        </div>
      </div>
    </>
  );
};

export default DeletesuccessfullyPage;
