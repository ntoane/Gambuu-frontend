const Subscribe = ({ onClose }) => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-row flex-wrap items-end justify-start pt-[2.5px] px-0 pb-[0.5px] box-border leading-[normal] tracking-[normal] [row-gap:20px] text-left text-29xl text-gray font-paragraphs-regular">
        <div className="flex-1 flex flex-col items-start justify-start gap-[152px] min-w-[416px] max-w-full mq450:gap-[38px] mq450:min-w-full mq675:gap-[76px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[80.5px] max-w-full mq450:gap-[20px] mq675:gap-[40px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
              <div className="flex flex-row items-start justify-start gap-[6.4px]">
                <img
                  className="self-stretch w-[27.4px] relative max-h-full min-h-[36px]"
                  alt="group"
                  src="/group.svg"
                />
                <img
                  className="self-stretch w-[28.3px] relative max-h-full min-h-[36px]"
                  alt=""
                  src="/group1.svg"
                />
                <img
                  className="h-9 w-[39.1px] relative min-h-[36px]"
                  alt=""
                  src="/group2.svg"
                />
                <img
                  className="self-stretch w-[24.9px] relative max-h-full min-h-[36px]"
                  alt=""
                  src="/group3.svg"
                />
                <img
                  className="self-stretch w-[27px] relative max-h-full min-h-[36px]"
                  alt=""
                  src="/group4.svg"
                />
                <img
                  className="self-stretch w-[27px] relative max-h-full min-h-[36px]"
                  alt=""
                  src="/group5.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-end py-0 px-5 box-border max-w-full">
              <div className="w-[360px] flex flex-col items-center justify-start gap-[32px] max-w-full mq450:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="self-stretch relative capitalize mq450:text-[29px] mq750:text-[38px]">
                    Subscribe now
                  </b>
                  <div className="self-stretch relative text-[20px] mq450:text-base">
                    Join the movement and we will let you know when we launch and
                    be the first in.
                  </div>
                </div>
                <div className="self-stretch rounded-xl flex flex-col items-center justify-start gap-[24px] max-w-full text-sm">
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                          <b className="relative capitalize inline-block min-w-[35px]">
                            Email
                          </b>
                          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full text-base text-primary1 border-[1px] border-solid border-gray">
                            <div className="flex-1 flex flex-row items-center justify-start gap-[8px] max-w-full">
                              <img
                                className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <div className="flex-1 relative font-light inline-block max-w-full">
                                Enter your email
                              </div>
                            </div>
                            <img
                              className="h-4 w-4 relative hidden"
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div>
                        </div>
                        <div className="w-80 relative leading-[20px] font-text-sm-regular text-gray-600 hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base text-white">
                    <div className="self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
                      <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-primary box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-primary">
                        <div className="relative capitalize inline-block min-w-[102px]">
                          subscribe now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center pt-[45px] px-5 pb-8 text-base">
            {/* <div className="relative capitalize">© Gambuu Pty Ltd 2024</div> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[416px] max-w-full mq450:min-w-full">
          <img
            className="self-stretch h-[786px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/section.svg"
          />
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  