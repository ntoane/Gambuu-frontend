import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-center justify-start pt-[101.9px] px-5 pb-[25px] gap-[61.4px] text-left text-base text-gray font-paragraphs-light mq450:gap-[31px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-11 pl-10 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-start justify-start gap-[6.9px]">
          <img
            className="self-stretch w-[29.5px] relative max-h-full min-h-[39px]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <img
            className="self-stretch w-[30.4px] relative max-h-full min-h-[39px]"
            alt=""
            src="/group-1.svg"
          />
          <img
            className="h-[38.6px] w-[42px] relative min-h-[39px]"
            alt=""
            src="/group-2.svg"
          />
          <img
            className="self-stretch w-[26.8px] relative max-h-full min-h-[39px]"
            alt=""
            src="/group-3.svg"
          />
          <img
            className="self-stretch w-[29px] relative max-h-full min-h-[39px]"
            alt=""
            src="/group-4.svg"
          />
          <img
            className="self-stretch w-[29px] relative max-h-full min-h-[39px]"
            alt=""
            src="/group-5.svg"
          />
        </div>
      </div>
      <div className="w-[305px] flex flex-col items-start justify-start gap-[45px] mq450:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="h-8 w-8 relative">
              <div className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] rounded-37xl bg-steelblue" />
              <a
                href="https://www.linkedin.com/company/gambuu/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute h-[43.75%] w-[46.88%] top-[25%] right-[25%] bottom-[31.25%] left-[28.13%] max-w-full overflow-hidden max-h-full z-[1]"
              >
                <img
                  alt="Linkedin"
                  src="/linked-in.svg"
                />
              </a>
            </div>
            <div className="h-8 w-8 relative">
              <div className="absolute top-[2px] left-[2px] w-7 h-7">
                <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#b13589,_#c62f94_79.31%,_#8a3ac8)] w-full h-full" />
                <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#e0e8b7,_#fb8a2e_44.47%,_#e2425c_71.47%,_rgba(226,_66,_92,_0))] w-full h-full" />
                <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#406adc_15.67%,_#6a45be_46.78%,_rgba(106,_69,_190,_0))] w-full h-full" />
              </div>
              <a
                href="https://www.instagram.com/gambuu_com_za/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute h-[62.5%] w-[62.5%] top-[18.75%] right-[18.75%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[3]"
              >
                <img
                  alt="Instagram"
                  src="/instagram.svg"
                />
              </a>
            </div>
            <a
              href="https://web.facebook.com/profile.php?id=61561125878924"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 relative min-h-[32px]"
            >
              <img
                alt="Facebook"
                src="/facebook.svg"
              />
            </a>
          </div>
        </div>
        <div className="relative leading-[20px] capitalize whitespace-nowrap">
          © 2024 Gambuu Ltd Pty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
