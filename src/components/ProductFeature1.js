import { useMemo } from "react";
import PropTypes from "prop-types";

const ProductFeature1 = ({
  className = "",
  personalizedAdvice,
  usersCanSeekPersonalizedA,
  globalWarmingcuate,
  propWidth,
  propPadding,
}) => {
  const productFeature04Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`h-[500px] w-[262px] rounded-mini bg-white box-border flex flex-col items-center justify-center py-[38px] px-3.5 gap-[22.5px] text-center text-xl text-black font-paragraphs-light border-[1px] border-solid border-white1 mq750:pt-[25px] mq750:pb-[25px] mq750:box-border ${className}`}
      style={productFeature04Style}
    >
      <h2 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit mq450:text-base">
        {personalizedAdvice}
      </h2>
      <div className="self-stretch relative text-base capitalize">
        {usersCanSeekPersonalizedA}
      </div>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={globalWarmingcuate}
      />
    </div>
  );
};

ProductFeature1.propTypes = {
  className: PropTypes.string,
  personalizedAdvice: PropTypes.string,
  usersCanSeekPersonalizedA: PropTypes.string,
  globalWarmingcuate: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default ProductFeature1;
