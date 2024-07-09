import ProductFeature from "./ProductFeature";
import ProductFeature1 from "./ProductFeature1";
import PropTypes from "prop-types";

const NonFeatures = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-[72px] px-5 box-border gap-[30px] bg-[url('/public/non-features@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-base text-primary font-paragraphs-light lg:pt-[47px] lg:pb-[47px] lg:box-border mq750:pt-[31px] mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <div className="w-[1160px] flex flex-col items-center justify-center gap-[10px] max-w-[1160px] lg:max-w-full">
        <b className="relative capitalize inline-block min-w-[65px]">
          Features:
        </b>
        <h1 className="m-0 w-full relative text-29xl capitalize font-bold font-inherit text-black text-center inline-block max-w-[1160px] lg:max-w-full mq450:text-10xl mq1050:text-19xl">
          Gambuu product features
        </h1>
      </div>
      <div className="w-[1160px] h-[1050px] flex flex-row flex-wrap items-center justify-center py-0 px-[45px] box-border gap-[50px_119px] max-w-[1160px] text-center text-xl text-black lg:pl-[22px] lg:pr-[22px] lg:box-border lg:max-w-full mq750:gap-[59px] mq450:gap-[30px]">
        <ProductFeature />
        <ProductFeature1
          personalizedAdvice="Personalized Advice"
          usersCanSeekPersonalizedA="Users can seek personalized advice on a wide range of topics, such as sports techniques, business strategies, fitness, nutrition, and more."
          globalWarmingcuate="/globalwarmingcuate.svg"
        />
        <ProductFeature1
          personalizedAdvice="Direct Engagement with Experts"
          usersCanSeekPersonalizedA="Connect directly with influencers, industry leaders, and consultants across various fields for personalized advice and guidance."
          globalWarmingcuate="/consultingcuate.svg"
          propWidth="291px"
          propPadding="35.5px 14px"
        />
        <ProductFeature1
          personalizedAdvice="Targeted Expertise"
          usersCanSeekPersonalizedA="Gambuu caters to individuals seeking expertise in various areas, professionals and public figures looking to engage with their audience, and small businesses and entrepreneurs seeking specialized consultancy services."
          globalWarmingcuate="/meetingcuate.svg"
          propWidth="291px"
          propPadding="63.4px 14px 63.5px"
        />
        <ProductFeature1
          personalizedAdvice="Enhanced Strategies"
          usersCanSeekPersonalizedA=" Small businesses and entrepreneurs can leverage Gambuu to enhance their strategies and operations through affordable and specialized consultancy services."
          globalWarmingcuate="/marketlaunchcuate.svg"
          propWidth="291px"
          propPadding="79.2px 14px"
        />
      </div>
    </section>
  );
};

NonFeatures.propTypes = {
  className: PropTypes.string,
};

export default NonFeatures;
