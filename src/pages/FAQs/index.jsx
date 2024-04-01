import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const FAQsPage = () => {
  const navigate = useNavigate();

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
            className="sm:ml-[0] ml-[38px] sm:mt-0 mt-[73px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtJudsonRegular30WhiteA700"
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
        <div className="font-inter h-[2411px] md:h-[2506px] max-w-[1205px] mt-[97px] mx-auto md:px-5 relative w-full">
          <div className="md:h-[653px] h-px mt-[652px] mx-auto w-[96%] md:w-full">
            <Line className="bg-white-A700 h-px m-auto w-full" />
            <Line className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full" />
          </div>
          <div className="absolute bg-deep_purple-300_3a flex flex-col gap-2 h-full inset-[0] items-center justify-center m-auto p-7 sm:px-5 w-full">
            <Text
              className="mt-[74px] md:text-5xl text-8xl text-white-A700"
              size="txtInterExtraBold96"
            >
              FAQs
            </Text>
            <div className="flex flex-col items-start justify-start mb-24 w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="h-[447px] md:h-[483px] mt-9 relative w-full">
                <Line className="absolute bg-white-A700 bottom-[13%] h-px inset-x-[0] mx-auto w-full" />
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterMedium32"
                >
                  <>
                    What is Cause Link?
                    <br />
                    <br />
                    Cause link’s platform for volunteers looking for ways to
                    help in <br />
                    their communities to find opportunities and organizations
                    that <br />
                    need their time, talents and passion. Nonprofits can
                    register their organizations, curate a profile of their
                    volunteer programs and needs, and keep their volunteer
                    events and ongoing opportunities up to date through the
                    platform’s posting app.
                  </>
                </Text>
              </div>
              <div className="h-[370px] relative w-full">
                <Line className="absolute bg-white-A700 bottom-[22%] h-px inset-x-[0] mx-auto w-full" />
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterMedium32"
                >
                  <>
                    What happened to All For Good?
                    <br />
                    <br />
                    Cause link builds upon the technology and partnerships
                    established through All For Good. The volunteer opportunity
                    aggregation services of All For Good now power the catalog
                    at Cause link, with updates to the design, search and
                    filtering features. AllForGood.
                  </>
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[41px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtInterBold32"
              >
                <span className="text-white-A700 font-inter text-left font-bold">
                  <>
                    Does the All For Good Search API still exist?
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-inter text-left font-medium">
                  <>
                    Yes! We continue to work to make the catalog of volunteer
                    opportunities accessible across the web so our partners can
                    issue a volunteer call-to-action and help their audiences
                    discover meaningful ways to engage with causes they care
                    about.
                    <br />
                    We can also help cause link a curated volunteer search
                    experience on your website with our search API. If you need
                    additional technical support, we can also provide your
                    organization with a full-service hosted, curated and
                    brand-aligned website experience at a URL of your choosing
                    through our new white label offering. Get in touch with us
                    for more information.
                  </>
                </span>
              </Text>
              <Line className="bg-white-A700 h-px mt-[11px] w-full" />
              <Text
                className="ml-16 md:ml-[0] mt-[76px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtInterBold32"
              >
                <span className="text-white-A700 font-inter text-left font-bold">
                  <>
                    I am a 501c3 nonprofit organization with a valid EIN, so why
                    can’t I find my organization when I try to register?
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-inter text-left font-medium">
                  The first step in our registration system uses information
                  from Google to identify your organization and its
                  place-oriented business data (address, website, etc.) Google
                  has most US-based registered 501c3 organizations in their
                  system already, but if you have trouble finding yours in the
                  search, you will need to add it to Google’s database at Google
                  My Business. There are a lot of good reasons to do this beyond
                  enabling you to register with cause link. Having a profile for
                  your organization in Google will help people discover your
                  important mission in search and maps!
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-600 flex font-judson items-center justify-center mt-[83px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default FAQsPage;
