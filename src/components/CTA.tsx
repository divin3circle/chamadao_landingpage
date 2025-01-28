import { motion } from "motion/react";

function CTA() {
  return (
    <div
      className="cta-background max-w-[1200px] my-0 mx-auto rounded-3xl mt-12 md:mt-24"
      style={{
        height: "500px",
        borderRadius: "30px",
      }}
    >
      <div className="cta-background gradient-overlay pl-4 md:pl-10 flex md:flex-row items-center rounded-xl justify-between flex-col">
        <div className="px-4 flex flex-col items-center justify-center md:items-start mb-8">
          <h1 className="title font-normal p-1 text-2xl text-center md:text-start md:text-5xl inline mt-16 md:my-2 md:mt-0">
            Join ChamaDAO Today
          </h1>
          <p className="font-titles text-sm md:text-base w-3/4 my-4">
            Take control of your financial future and build wealth with your
            community.
          </p>
          <button className="py-3 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center hover:animate-bounce md:mt-4 transition-all ease-in-out duration-150 w-[170px]">
            <img
              src="/download.svg"
              className="w-[14px] h-[14px]"
              alt="download_app"
            />
            <h1 className="font-bold font-titles text-white text-sm">
              Download App
            </h1>
          </button>
        </div>
        <motion.img
          src="/iphone.png"
          alt="Hero"
          className="absolute bottom-0 md:mb-24 md:bottom-0 object-contain h-[300px] md:h-[600px] lg:w-[600px] md:w-auto w-[300px]"
          initial={{ y: -100, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default CTA;
