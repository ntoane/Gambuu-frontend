import PropTypes from "prop-types";

const ProductValue1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white1 overflow-hidden flex flex-col items-center justify-center pt-[72px] px-0 pb-[70px] gap-[30px] text-center text-base text-black font-paragraphs-light border-b-[1px] border-solid border-primary1 mq750:pt-[47px] mq750:pb-[45px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-5 px-0 gap-[20px]">
        <div className="mb-3 w-full text-base font-bold text-center text-purple-700 capitalize max-md:max-w-full">
          Why choose us?
        </div>
        <h1 className="m-0 self-stretch relative text-29xl capitalize font-bold font-inherit mq450:text-10xl mq1050:text-19xl">
          Your Direct Path to skill monetization
        </h1>
        <div className="self-center mt-5 text-base text-center text-black capitalize max-w-[1154px] w-[1154px] max-md:max-w-full">
          At Gambuu, we're reshaping the landscape of consulting by putting the
          power in your hands. Our web-based platform is your gateway to
          personalised advice like never before.
        </div>
        <div className="flex-wrap justify-center content-start self-center px-5 py-6 mt-12 w-full max-w-[1160px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-start text-black max-md:mt-10">
                <h1 className="text-3xl font-bold capitalize">
                  Why Choose Gambuu?
                </h1>
                <div className="flex flex-col justify-start px-1.5 mt-5 text-base font-light">
                  <div className="flex gap-2.5 justify-start">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Empowerment: Empower yourself by accessing top-notch
                      expertise and taking control of your growth journey.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Secure your career: Help those who need it and get a side
                      hustle, secure your career and be ahead of the curve.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center text-black max-md:mt-10">
                <h1 className="text-3xl font-bold capitalize">
                  What Sets Us Apart?
                </h1>
                <div className="flex flex-col justify-center px-1.5 mt-5 text-base font-light">
                  <div className="flex gap-2.5 justify-center">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Secure Environment: Rest assured knowing your consultations
                      are conducted in a secure environment.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Monetize Knowledge: Experts can monetize their knowledge by
                      offering personalized consultations billed by the minute.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-black max-md:mt-10">
                <h1 className="text-3xl font-bold capitalize">its easy</h1>
                <div className="flex flex-col justify-center px-1.5 mt-5 text-base font-light">
                  <div className="flex gap-2.5 justify-center">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">Sign up as a consultant</div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Fill out your profile to your best ability to show your
                      skills and how you can help.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Wait for those who need you to find you{" "}
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Start consulting with Gambuu and make money from your skills
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductValue1.propTypes = {
  className: PropTypes.string,
};

export default ProductValue1;
