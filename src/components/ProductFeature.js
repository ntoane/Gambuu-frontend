import PropTypes from "prop-types";

const ProductFeature = ({ className = "" }) => {
  return (
    <div
      className={`h-[500px] w-[277px] rounded-mini bg-white box-border flex flex-col items-center justify-center py-[47.5px] px-3.5 gap-[23px] text-center text-xl text-black font-paragraphs-light border-[1px] border-solid border-white1 mq750:pt-[31px] mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <h2 className="m-0 self-stretch relative text-inherit capitalize font-inherit mq450:text-base">
        <b>Flexible Pricing</b>
        <span>{` `}</span>
      </h2>
      <div className="self-stretch relative text-base capitalize">
        Consultants set their own fees based on their expertise, allowing for a
        range of pricing options to suit different budgets and needs.
      </div>
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/savingmoneycuate.svg"
      />
    </div>
  );
};

ProductFeature.propTypes = {
  className: PropTypes.string,
};

export default ProductFeature;
