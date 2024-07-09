import PropTypes from "prop-types";

const NonProductValue = ({ className = "" }) => {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-20 bg-white border-b border-solid border-zinc-400 max-md:px-5">
      <div className="flex flex-col pt-5 w-full max-w-[1160px] max-md:max-w-full">
        <div className="mb-5 text-base font-bold text-center text-purple-700 capitalize max-md:max-w-full">
          Why choose us?
        </div>
        <h1 className="m-0 self-stretch relative text-29xl capitalize font-bold font-inherit mq450:text-10xl mq1050:text-19xl">
          Your Direct Path to Expert Advice
        </h1>
        <div className="mt-5 text-base text-center text-black capitalize max-md:max-w-full">
          At Gambuu, we're reshaping the landscape of consulting by putting the
          power in your hands. Say goodbye to traditional barriers and hello to
          direct connections with top professionals, industry leaders, and
          influencers. Our web-based platform is your gateway to personalized
          advice like never before.
        </div>
        <div className="flex-wrap justify-center content-start py-6 mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center text-black max-md:mt-10">
                <h1 className="text-3xl font-bold capitalize">
                  Why Choose Gambuu?
                </h1>
                <div className="flex flex-col justify-center px-1.5 mt-5 text-base font-light">
                  <div className="flex gap-2.5 justify-center">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Efficiency: Get the advice you need, when you need it,
                      without the hassle of traditional consulting channels.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Personalisation: Receive advice that is cuAstomised to
                      your specific needs and goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-black max-md:mt-10">
                <h1 className="text-3xl font-bold text-center capitalize">
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
                      Secure Environment: Rest assured knowing your
                      consultations are conducted in a secure environment.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-2.5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Diverse Expertise: Access a wide range of expertise, from
                      business strategy to personal development.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-2.5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Direct Access: Connect directly with experts who can
                      provide tailored advice just for you.
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
                    <div className="flex-1 my-auto">Sign up </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1 my-auto">
                      Fill out your profile to your best ability.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Find someone with the set of skills you need.
                    </div>
                  </div>
                  <div className="flex gap-2.5 justify-center mt-5">
                    <img
                      loading="lazy"
                      src="/check-icon.svg"
                      className="shrink-0 my-auto w-7 aspect-square fill-purple-700"
                    />
                    <div className="flex-1">
                      Book a consultant and grow your potential.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NonProductValue.propTypes = {
  className: PropTypes.string,
};

export default NonProductValue;
