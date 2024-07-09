import { useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

const Content = ({ className = "" }) => {
  const [name, setName] = useState("-");
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    // If name and email are empty, return early
    if (email === "") {
      window.alert("Please type both your name and email address to subscribe");
      return;
    }

    // If name and email are not empty, send a POST request to the PHP server
    axios.post('https://portal.occusurv.co.za/api/public/api/gambuu/subscribe', {
      name: name,
      email: email
    }, {
      headers: {
        'Accept': 'application/json',
      }
    })
      .then((response) => {
        // console.log(response.data);
        if (response.data['status'] === "success") {
          window.alert("You have successfully subscribed and we will keep you in the loop when we launch");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div
      className={`self-stretch bg-gray flex flex-col items-center justify-start py-[70px] px-8 box-border gap-[15px] max-w-full text-center text-13xl text-white1 font-paragraphs-light mq450:pt-[45px] mq450:pb-[45px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <h1 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit mq450:text-lgi mq1050:text-7xl">
          Still have questions?
        </h1>
        <h3 className="m-0 w-full relative text-lg capitalize font-normal font-inherit inline-block max-w-[1154px] lg:max-w-full">
          <p className="m-0">{`Can’t find the answer you’re looking for? `}</p>
          <p className="m-0">
            Please subscribe so that when we launch you’ll be the first to know
            and get all your questions answered.
          </p>
        </h3>
      </div>
      <div className="self-stretch rounded-tl-21xl rounded-tr-3xs rounded-br-21xl rounded-bl-3xs flex flex-col items-center justify-center py-[25px] px-2.5 box-border gap-[12px] max-w-full text-left text-sm text-gray-700 font-text-sm-regular">
        <form
          onSubmit={handleSubscribe} 
          className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-5 box-border gap-[12px] max-w-full"
        >
          <div className="w-[345px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="w-9 relative leading-[20px] font-medium hidden">
                  Email
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] text-base text-gray-500 border-[1px] border-solid border-gray-300">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/mail.svg"
                    />
                    <input 
                      type="email"
                      placeholder="olivia@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-[calc(100%_-_20px)] [border:none] [outline:none] font-text-sm-regular text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[173px] whitespace-nowrap p-0"
                    />
                  </div>
                  <img
                    className="h-4 w-4 relative hidden"
                    alt=""
                    src="/help-icon.svg"
                  />
                </div>
              </div>
              <div className="w-80 relative leading-[20px] text-gray-600 hidden">
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <button
            type="submit" 
            className="cursor-pointer [border:none] py-2.5 px-7 bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg overflow-hidden flex flex-row items-center justify-center hover:bg-darkorchid"
          >
            <b className="relative text-base capitalize inline-block font-paragraphs-light text-white text-left min-w-[69px]">
              Subscribe
            </b>
          </button>
        </form>
        <div className="self-stretch relative text-base font-light font-paragraphs-light text-white1 text-center">
          Subscribe to know when we launch and you can get expert help.
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
