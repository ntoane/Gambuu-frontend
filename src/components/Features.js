import ProductFeature from "./ProductFeature";
import ProductFeature1 from "./ProductFeature1";
import PropTypes from "prop-types";

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-[72px] px-0 gap-[30px] bg-[url('/public/non-features@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-primary font-paragraphs-light lg:pt-[47px] lg:pb-[47px] lg:box-border mq750:pt-[31px] mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <b className="w-[105px] relative capitalize flex items-center box-border pl-5 pr-5">
          Features:
        </b>
        <h1 className="m-0 self-stretch relative text-29xl capitalize font-bold font-inherit text-black text-center mq450:text-10xl mq1050:text-19xl">
          Gambuu product features
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-[154px] box-border gap-[50px_140px] min-h-[1050px] text-center text-xl text-black lg:gap-[70px] lg:pl-[77px] lg:pr-[77px] lg:box-border mq750:gap-[35px] mq750:pl-[38px] mq750:pr-[38px] mq750:box-border mq450:gap-[17px]">
        <ProductFeature />
        <div className="w-[282px] rounded-mini bg-white box-border flex flex-col items-center justify-center py-[46px] px-3.5 gap-[23px] border-[1px] border-solid border-white1 mq750:pt-[30px] mq750:pb-[30px] mq750:box-border">
          <h2 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit mq450:text-base">
            Monetization Opportunity
          </h2>
          <div className="self-stretch relative text-base capitalize">
            Professionals can earn income by sharing their insights and skills
            on Gambuu, allowing them to monetize their expertise.
          </div>
          <img
            className="w-[252.2px] h-[255px] relative"
            loading="lazy"
            alt=""
            src="/growthcurvecuate.svg"
          />
        </div>
        <ProductFeature1
          personalizedAdvice="Targeted Expertise"
          usersCanSeekPersonalizedA="Gambuu caters to individuals seeking expertise in various areas, professionals and public figures looking to engage with their audience, and small businesses and entrepreneurs seeking specialized consultancy services."
          globalWarmingcuate="/meetingcuate.svg"
          propWidth="291px"
          propPadding="63.4px 14px 63.5px"
        />
        <ProductFeature1
          personalizedAdvice="Secure Payment System"
          usersCanSeekPersonalizedA="Our built-in payment system ensures secure transactions by holding funds until the completion of the consultation, providing confidence to both consultants and users."
          globalWarmingcuate="/paymentinformationcuate.svg"
          propWidth="260px"
          propPadding="28.5px 14px"
        />
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
