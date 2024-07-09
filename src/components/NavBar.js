import React, { useState } from 'react';
import SubscribePopUp from "./SubscribePopUp";
import PropTypes from "prop-types";

const NavBar = ({ className = "" }) => {
  const [showSubscribePopUp, setShowSubscribePopUp] = useState(false);

  const handleClick = () => {
    setShowSubscribePopUp(true);
  };

  return (
    <header
      className={`self-stretch bg-white1 flex flex-row flex-wrap items-center justify-center py-[22px] px-5 gap-[10px_863px] top-[0] z-[99] sticky text-left text-base text-white font-paragraphs-light lg:gap-[431px] mq750:gap-[216px] mq450:gap-[108px] ${className}`}
    >
      <img
        className="h-[50px] w-28 relative"
        loading="lazy"
        alt=""
        src="/gambuu-logo.svg"
      />
      <div className="rounded-lg flex flex-row items-start justify-start">
        <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-primary overflow-hidden flex flex-row items-center justify-center py-3 px-5 whitespace-nowrap">
          <button
            // onClick={handleClick}
            className="relative inline-block min-w-[129px] bg-transparent border-none cursor-pointer font-bold text-[inherit] text-lg"
          >
            Subscribe for free
          </button>
          {showSubscribePopUp && <SubscribePopUp onClose={() => setShowSubscribePopUp(false)} />}
        </div>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};

export default NavBar;
