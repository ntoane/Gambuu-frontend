import { useCallback } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import NonExpertHero from "../components/NonExpertHero";
import ProductShowcase from "../components/ProductShowcase";
import ProductValue from "../components/ProductValue";
import Features from "../components/Features";
import SignUp from "../components/SignUp";
import FeaturesSection from "../components/FeaturesSection";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Experts = () => {
  const navigate = useNavigate();

  const onNavbarItemsContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-lg text-gray font-paragraphs-light">
      <NavBar />
      <div className="bg-white1 flex flex-row flex-wrap items-start justify-center py-[25px] px-[523px] gap-[33px_31px] mq750:gap-[15px] mq750:pl-[261px] mq750:pr-[261px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div
          className="rounded-8xs bg-white1 flex flex-row items-start justify-start p-2.5 whitespace-nowrap cursor-pointer"
          onClick={onNavbarItemsContainerClick}
        >
          <a className="[text-decoration:none] relative capitalize text-[inherit]">
            I’m not a Consultant
          </a>
        </div>
        <button className="cursor-pointer [border:none] py-2.5 px-[26px] bg-primary2 flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumpurple">
          <a className="[text-decoration:none] relative text-lg capitalize font-paragraphs-light text-gray text-center inline-block min-w-[127px]">
            I’m a Consultant
          </a>
        </button>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <NonExpertHero
          feelingStuck="Need to monetize your skills?"
          getExpertHelpWithAnything="give expert help, with anything."
          findAnExpertBookASessionA="sign up as an expert, Monetize yor skills beat AI and the failing job market with the help of gambuu, a safe, reliable, and trustworthy platform to help others and get paid while doing it. sign up as an expert and help those who need it most."
          inputWithLabelBackgroundImage="url('/hero-section@3x.png')"
        />
        <ProductShowcase />
        <ProductValue />
        <Features />
        <SignUp
          getExpertHelpWithAnything="give expert help, with anything. make money. grow."
          getExpertHelp="give expert help "
        />
      </main>
      <FeaturesSection />
      <Content />
      <Footer />
    </div>
  );
};

export default Experts;
