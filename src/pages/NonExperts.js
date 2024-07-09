import { useCallback } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import NonExpertHero from "../components/NonExpertHero";
import NonProductShowcase from "../components/NonProductShowcase";
import NonProductValue from "../components/NonProductValue";
import NonFeatures from "../components/NonFeatures";
import SignUp from "../components/SignUp";
import FeaturesSection from "../components/FeaturesSection";
import Content from "../components/Content";
import Footer from "../components/Footer";

const NonExperts = () => {
  const navigate = useNavigate();

  const onNavbarItemsContainerClick = useCallback(() => {
    navigate("/experts");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-lg text-gray font-paragraphs-light">
      <NavBar />
      <div className="bg-white1 flex flex-row flex-wrap items-start justify-center py-[25px] px-[523px] gap-[33px_31px] mq750:gap-[15px] mq750:pl-[261px] mq750:pr-[261px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="bg-primary2 flex flex-row items-start justify-start p-2.5 whitespace-nowrap">
          <a className="[text-decoration:none] relative capitalize text-[inherit]">
            I’m not a Consultant
          </a>
        </div>
        <div
          className="bg-white1 flex flex-row items-start justify-start py-2.5 px-[26px] whitespace-nowrap cursor-pointer"
          onClick={onNavbarItemsContainerClick}
        >
          <a className="[text-decoration:none] relative capitalize text-[inherit] inline-block min-w-[127px]">
            I’m a Consultant
          </a>
        </div>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <NonExpertHero
          feelingStuck="Feeling Stuck?"
          getExpertHelpWithAnything="Get Expert Help, with anything."
          findAnExpertBookASessionA="Find an expert, book a session and get answers with the help of gambuu, safe, reliable, and trustworthy, experts in any field. "
        />
        <NonProductShowcase />
        <NonProductValue />
        <NonFeatures />
        <SignUp
          getExpertHelpWithAnything="Get expert help, with anything. reach your true potential."
          getExpertHelp="Get expert help "
        />
      </main>
      <FeaturesSection />
      <Content />
      <Footer />
    </div>
  );
};

export default NonExperts;
