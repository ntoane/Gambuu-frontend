import Expert from "./Expert";
import PropTypes from "prop-types";

const NonProductShowcase = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white1 overflow-hidden flex flex-col items-center justify-center pt-[72px] px-0 pb-[70px] gap-[30px] text-center text-base text-black font-paragraphs-light border-b-[1px] border-solid border-primary1 lg:pt-[47px] lg:pb-[45px] lg:box-border mq750:pt-[31px] mq750:pb-[29px] mq750:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-center py-[15px] px-5 box-border gap-[20px] max-w-[1200px] lg:max-w-full">
        <b className="self-stretch relative capitalize text-primary">How?</b>
        <h1 className="m-0 w-full relative text-29xl capitalize font-bold font-inherit inline-block max-w-[1160px] lg:max-w-full mq450:text-10xl mq1050:text-19xl">
          Choose an expert in the field you need and get help
        </h1>
        <div className="w-full relative capitalize inline-block max-w-[1160px] lg:max-w-full">
          With our wide range of experts, you can literally choose any skill you
          need help with, Gambuu guarantees you will find an expert who can help
          you.
        </div>
      </div>
      <div className="self-stretch h-[894px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-center py-2.5 px-[140px] box-border gap-[16px] text-left text-lg text-gray lg:pl-[70px] lg:pr-[70px] lg:box-border mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <Expert
          unsplashiEEBWgY6lA="/Consultant-7.png"
          johnDoe="dumisani sambo"
          johnDoe1="10 years exp."
          photographyAndVideo="Photography and video "
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-6.png"
          johnDoe="Alex Bennett"
          johnDoe1="6 years exp."
          photographyAndVideo="Marketing Strategy"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-5.png"
          johnDoe="Chinedzu marwala"
          johnDoe1="4 years exp."
          photographyAndVideo="Graphic design"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-4.png"
          johnDoe="Kate smith"
          johnDoe1="2 years exp."
          photographyAndVideo="Business development and funding"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-0.png"
          johnDoe="Nel padayachee"
          johnDoe1="6 years exp."
          photographyAndVideo="Business growth and AI"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-1.png"
          johnDoe="Bonginkosi nkosi"
          johnDoe1="6 years exp."
          photographyAndVideo="full stack web development"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-2.png"
          johnDoe="el coetzee"
          johnDoe1="3 years exp."
          photographyAndVideo="Artificial intelligence sciences"
        />
        <Expert
          unsplashiEEBWgY6lA="/Consultant-3.png"
          johnDoe="amanda sithole"
          johnDoe1="16 years exp."
          photographyAndVideo="Apparel and design "
        />
      </div>
      <div className="self-stretch relative capitalize">
        Not real consultants*
      </div>
    </section>
  );
};

NonProductShowcase.propTypes = {
  className: PropTypes.string,
};

export default NonProductShowcase;
