import PropTypes from "prop-types";

const Expert = ({
  className = "",
  unsplashiEEBWgY6lA,
  johnDoe,
  johnDoe1,
  photographyAndVideo,
}) => {
  return (
    <div
      className={`w-[278px] rounded-mini bg-white box-border shrink-0 flex flex-col items-start justify-start py-[3px] px-1 gap-[2px] text-left text-lg text-gray font-paragraphs-light border-[1px] border-solid border-primary1 ${className}`}
    >
      <img
        className="w-[267px] h-[267px] relative rounded-mini object-contain"
        loading="lazy"
        alt="Profile picture"
        src={unsplashiEEBWgY6lA}
      />
      <div className="self-stretch rounded-8xs bg-white1 flex flex-col items-start justify-center p-[5px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
          <div className="w-[250px] flex flex-row items-center justify-between gap-[20px]">
            <h3 className="m-0 relative text-inherit capitalize font-bold font-inherit">
              {johnDoe}
            </h3>
            <b className="relative text-sm capitalize inline-block min-w-[78px]">
              {johnDoe1}
            </b>
          </div>
          <div className="flex flex-col items-start justify-center gap-[5px] text-xs">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/base-icons.svg"
              />
              <div className="relative capitalize font-light inline-block min-w-[120px]">
                {photographyAndVideo}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-3.5 pl-0 gap-[10px]">
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/base-icons-1.svg"
              />
              <div className="relative capitalize font-light inline-block min-w-[84px]">
                From R1500 p/h
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[10px]">
              <img
                className="h-4 w-4 relative min-h-[16px]"
                alt=""
                src="/base-icons-2.svg"
              />
              <div className="relative capitalize font-light inline-block min-w-[78px]">
                No reviews yet
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-primary2 flex flex-row items-center justify-between py-[5px] px-1.5 gap-[20px] text-3xs">
            <div className="flex flex-col items-start justify-center gap-[2px]">
              <div className="relative capitalize inline-block min-w-[65px]">
                book a session
              </div>
              <b className="relative text-xs capitalize inline-block min-w-[100px]">
                Currently available
              </b>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-24 rounded-lg flex flex-row items-start justify-start">
              <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-primary overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] whitespace-nowrap border-[1px] border-solid border-primary">
                <div className="relative text-xs capitalize font-paragraphs-light text-white text-left inline-block min-w-[68px]">
                  Book session
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Expert.propTypes = {
  className: PropTypes.string,
  unsplashiEEBWgY6lA: PropTypes.string,
  johnDoe: PropTypes.string,
  johnDoe1: PropTypes.string,
  photographyAndVideo: PropTypes.string,
};

export default Expert;
