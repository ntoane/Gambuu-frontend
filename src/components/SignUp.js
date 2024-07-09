import PropTypes from "prop-types";

const SignUp = ({
  className = "",
  getExpertHelpWithAnything,
  getExpertHelp,
}) => {
  return (
    <section
      className={`self-stretch bg-primary overflow-hidden flex flex-row flex-wrap items-center justify-center max-w-full text-center text-xl text-white1 font-paragraphs-light ${className}`}
    >
      <div className="flex-[0.8618] flex flex-col items-center justify-center py-[93px] px-[67px] box-border bg-[url('/public/value@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[375px] max-w-full mq750:gap-[27px] mq750:pl-[33px] mq750:pr-[33px] mq750:box-border mq750:w-[calc(100%_-_40px)] mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1050:pt-[60px] mq1050:pb-[60px] mq1050:box-border">
        <div className="self-stretch rounded-22xl bg-gray1 flex flex-col items-center justify-center py-[43px] px-[33px] box-border gap-[53px] max-w-full mq750:gap-[26px] mq750:pt-7 mq750:pb-7 mq750:box-border">
          <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit inline-block min-w-[120px] mq450:text-base">
            Sign up today
          </h2>
          <h1 className="m-0 self-stretch relative text-29xl capitalize font-bold font-inherit mq450:text-10xl mq1050:text-19xl">
            {getExpertHelpWithAnything}
          </h1>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-left">
            <div className="flex-1 flex flex-col items-start justify-center py-0 pr-[261px] pl-0 box-border gap-[21px] max-w-full mq750:pr-[130px] mq750:box-border mq450:pr-5 mq450:box-border">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="h-7 w-7 relative rounded-sm overflow-hidden shrink-0"
                  alt=""
                  src="/check-icon-5.svg"
                />
                <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-base">
                  Grow your network
                </h2>
              </div>
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="h-7 w-7 relative rounded-sm overflow-hidden shrink-0"
                  alt=""
                  src="/check-icon-5.svg"
                />
                <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-base">
                  {getExpertHelp}
                </h2>
              </div>
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="h-7 w-7 relative rounded-sm overflow-hidden shrink-0"
                  alt=""
                  src="/check-icon-5.svg"
                />
                <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-base">
                  Reach your true potential
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-primary">
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white1 box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 max-w-full border-[1px] border-solid border-white1">
                <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-base">
                  get started today
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[795px] flex-1 flex flex-col items-center justify-center py-0 px-5 box-border min-w-[375px] max-w-full ml-[-2px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/unsplash6ie6ojshvwg@2x.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/unsplash1lybchrh4j8@2x.png"
        />
      </div>
    </section>
  );
};

SignUp.propTypes = {
  className: PropTypes.string,
  getExpertHelpWithAnything: PropTypes.string,
  getExpertHelp: PropTypes.string,
};

export default SignUp;
