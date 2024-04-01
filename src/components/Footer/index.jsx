import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[9px] ml-[613px] mr-[645px] mt-[18px] w-[17%]">
          <div className="flex flex-col gap-[23px] items-center justify-center w-full">
            <Img
              className="h-[121px] md:h-auto rounded-[50%] w-[55%]"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                <Img
                  className="h-9 mt-0.5"
                  src="images/img_riinstagramfill.svg"
                  alt="riinstagramfill"
                />
                <Img
                  className="h-[38px]"
                  src="images/img_icoutlinefacebook.svg"
                  alt="icoutlinefacebo"
                />
                <Img
                  className="h-[33px] mt-0.5"
                  src="images/img_mditwitter.svg"
                  alt="mditwitter"
                />
                <Img
                  className="h-9 mt-0.5"
                  src="images/img_biyoutube.svg"
                  alt="biyoutube"
                />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtJudsonRegular24"
              >
                <>
                  Terms and Conditions
                  <br />
                  Contact CauseLink
                </>
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
