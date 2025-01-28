// import { openModal } from "../../utils/modalFunctions";
// import { useOverlayStore } from "../hooks/overlayStore";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";
import { TypewriterEffect } from "./ui/typewritter-effect";
import { motion } from "motion/react";

const words_1 = [
  {
    text: "The",
  },
  {
    text: "Complete",
  },
  {
    text: "Savings",
  },
  {
    text: "Platform",
  },
  {
    text: "Made",
  },
  {
    text: "For",
  },
  {
    text: "Everyone.",
    className: "text-primary",
  },
];

function Hero() {
  return (
    <div className="hero-background">
      <div className="max-w-[1200px] flex items-center justify-center flex-col md:flex-row mt-24 mb-16 md:mb-4 md:mt-0">
        <div className="px-2 w-full md:w-3/4 my-0 md:mt-0">
          <h1 className="select-none title font-normal leading-snug md:text-[54px] md:w-[80%] text-3xl text-center mb-4 md:text-start py-1 mt-12 md:mt-0">
            <TypewriterEffect
              words={words_1}
              className="text-chamaBlack select-none title font-normal leading-snug md:text-[54px] text-3xl text-center mb-4 md:text-start"
            />
          </h1>
          <p className="font-titles md:text-xl leading-relaxed mt-2 text-center w-11/12 md:text-start mb-5 select-none">
            Join the revolution in communal financial freedom with ChamaDAO — a
            decentralized platform inspired by Kenya’s trusted chamas.
          </p>
          <div className="md:my-12 my-4 flex w-full flex-col md:flex-row gap-2 items-center md:items-start">
            <div className="bg-conic/[from_0deg] from-chamaWhite via-chamaYellow to-chamaWhite w-full md:w-auto rounded-[35px] p-px py-1">
              <button className="md:py-3 animate-shimmer inline-flex py-2 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[35px] items-center md:gap-1 justify-center ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] border border-slate-800 bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <IconBrandAppstore size={30} color="white" />
                <div className="flex items-start flex-col">
                  <h1 className="font-titles text-white text-xs">
                    Download On
                  </h1>
                  <h1 className="font-titles font-bold text-white">
                    App Store
                  </h1>
                </div>
              </button>
            </div>
            <div className=" bg-conic/[from_0deg] from-chamaWhite via-chamaYellow to-chamaWhite w-full md:w-auto rounded-[35px] p-px py-1">
              <button className="md:py-3 animate-shimmer inline-flex py-2 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[35px] items-center md:gap-1 justify-center ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] border border-slate-800 bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <IconBrandGooglePlay size={30} color="white" />
                <div className="flex items-start flex-col">
                  <h1 className="font-titles text-white text-xs">
                    Download On
                  </h1>
                  <h1 className="font-titles font-bold text-white">
                    Google Play
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.img
            initial={{
              y: -50,
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            src="/iphones.svg"
            alt="thechamadao"
            className="object-cover h-full w-full z-10"
          />
          <img src="/circle.svg" alt="circle" className="absolute" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
