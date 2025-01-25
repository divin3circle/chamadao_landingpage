// import { openModal } from "../../utils/modalFunctions";
// import { useOverlayStore } from "../hooks/overlayStore";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";

function Hero() {
  // const { toggleOverlay } = useOverlayStore();

  // const handleOverlayAndModal = () => {
  //   openModal("joinModal");
  //   toggleOverlay();
  // };
  return (
    <div className="hero-background flex items-center justify-center flex-col md:flex-row mt-24 md:mt-0">
      <div className="px-4 md:px-8 lg:px-12 w-full md:w-3/4 max-w-[1200px] mx-auto my-0">
        <h1 className="select-none font-body font-semibold md:text-[44px] md:w-[80%] leading-10 text-3xl text-center mb-4 md:text-start py-1 mt-12 md:mt-0">
          The Complete Saving Platform Made For{" "}
          <span className="text-primary font-bold">Everyone</span>
        </h1>
        <p className="font-titles md:text-xl leading-relaxed mt-2 text-center w-11/12 md:text-start mb-5 select-none">
          Join the revolution in communal financial freedom with ChamaDAO — a
          decentralized platform inspired by Kenya’s trusted chamas.
        </p>
        <div className="md:my-12 my-4 flex w-full flex-col md:flex-row gap-2 items-center md:items-start">
          <button className="md:py-3 py-2 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[35px] flex items-center md:gap-1 justify-center transition-all ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] md:my-0 my-2 hover:opacity-90">
            <IconBrandAppstore size={30} color="white" />
            <div className="flex items-start flex-col">
              <h1 className="font-titles text-white text-xs">Download On</h1>
              <h1 className="font-titles font-bold text-white">App Store</h1>
            </div>
          </button>
          <button className="md:py-3 py-2 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[35px] flex items-center md:gap-1 justify-center transition-all ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] hover:opacity-90">
            <IconBrandGooglePlay size={30} color="white" />
            <div className="flex items-start flex-col">
              <h1 className="font-titles text-white text-xs">Download On</h1>
              <h1 className="font-titles font-bold text-white">Google Play</h1>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/hero.svg"
          alt="thechamadao"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
