import PropTypes from "prop-types";

const FeaturesSection = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-24 px-0 gap-[24px] text-center text-base text-brand-700 font-paragraphs-light mq450:pt-[62px] mq450:pb-[62px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-8 mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
          <b className="self-stretch relative capitalize">Integrations:</b>
          <h1 className="m-0 self-stretch relative text-13xl capitalize font-bold font-inherit text-gray-900 mq450:text-lgi mq1050:text-7xl">
            Work from your favorite tools
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-8 mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 px-[368px] gap-[20px] lg:pl-[184px] lg:pr-[184px] lg:box-border mq750:pl-[92px] mq750:pr-[92px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-20 w-20 relative overflow-hidden shrink-0 min-h-[80px]"
            loading="lazy"
            alt=""
            src="/ms-skype.svg"
          />
          <img
            className="h-20 w-20 relative overflow-hidden shrink-0 min-h-[80px]"
            loading="lazy"
            alt=""
            src="/zoom.svg"
          />
          <img
            className="h-20 w-20 relative overflow-hidden shrink-0 object-cover min-h-[80px]"
            loading="lazy"
            alt=""
            src="/teams@2x.png"
          />
          <img
            className="h-20 w-20 relative min-h-[80px]"
            loading="lazy"
            alt=""
            src="/google-meet.svg"
          />
          <img
            className="h-20 w-20 relative overflow-hidden shrink-0 min-h-[80px]"
            loading="lazy"
            alt=""
            src="/gmail.svg"
          />
          <img
            className="h-20 w-20 relative min-h-[80px]"
            loading="lazy"
            alt=""
            src="/gcalendar.svg"
          />
        </div>
      </div>
    </div>
  );
};

FeaturesSection.propTypes = {
  className: PropTypes.string,
};

export default FeaturesSection;
