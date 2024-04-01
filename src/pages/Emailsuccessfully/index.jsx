import React from "react";

import { Link } from "react-router-dom"; // Import Link


import { Img, Text } from "components";

const EmailsuccessfullyPage = () => {
  return (
    <>
      <div className="bg-gray-700 flex flex-col font-judson items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-600_87 flex flex-col md:gap-10 gap-[65px] items-center justify-start max-w-[1092px] mx-auto p-[17px] md:px-5 rounded-[15px] w-full">
        <Link to="/"> {/* Use Link component and specify the route */}
            <Img
              className="h-6 w-6"
              src="images/img_gridiconscross.svg"
              alt="gridiconscross"
            />
          </Link>
          <Text
            className="mb-[74px] md:text-5xl text-[64px] text-white-A700"
            size="txtJudsonBold64"
          >
            Email sent Successfully!!!
          </Text>
        </div>
      </div>
    </>
  );
};

export default EmailsuccessfullyPage;
