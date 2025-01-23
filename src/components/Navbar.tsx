import { useEffect, useState } from "react";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div className="flex items-center justify-between md:my-4 my-2 mx-2">
      <div className="hidden md:flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-1">
            <img src="/logo.svg" alt="thechamadao" className="h-10 w-10" />
            <h1 className="font-titles text-xl font-bold">TheChamaDAO</h1>
          </Link>
          <div className="flex items-center justify-around">
            <Link
              to="/story"
              className=" font-[500] font-titles text-md px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Our Story
            </Link>
            <Link
              to="/contact-us"
              className=" font-[500] font-titles text-md px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Contact
            </Link>
            <Link
              to="/invest"
              className=" font-[500] font-titles text-md px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Invest
            </Link>
            <Link
              to="/whitepaper"
              className=" font-[500] font-titles text-md px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Whitepaper
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button className="py-3 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center hover:animate-bounce transition-all ease-in-out duration-150 w-[170px]">
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
        </div>
      </div>
      <div className="flex items-center justify-between px-2 md:hidden w-full">
        <Link to="/" className="flex items-center gap-1">
          <img src="/logo.svg" alt="thechamadao" className="h-8 w-8" />
          <h1 className="font-titles text-xl font-bold">TheChamaDAO</h1>
        </Link>
        <div className="" onClick={() => setIsOpen(false)}>
          <IconMenuDeep size={30} />
        </div>
      </div>
      <div
        className={`backdrop-blur-lg h-[100dvh] w-full md:hidden flex flex-col fixed top-0 left-0 z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-1 mx-1">
          <Link to="/" className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-[30px] w-[30px] ml-4"
              />
              <h1 className="font-titles font-bold text-chamaBlack text-2xl ml-2">
                <span className="">The</span>
                Chama
                <span className="">DAO</span>
              </h1>
            </div>
          </Link>
          <div
            className="flex items-center justify-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            <IconX size={34} color="#279761" />
          </div>
        </div>
        <ul className="flex flex-col h-full items-center gap-12 mt-20 font-titles">
          <Link
            to="/story"
            className=" font-[600] font-titles text-lg px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all border-b-[1px] border-gray-700 pb-2 w-[90%] my-4 flex items-center justify-center"
          >
            Our Story
          </Link>
          <Link
            to="/contact-us"
            className=" font-[600] font-titles text-lg px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all border-b-[1px] border-gray-700 pb-2 w-[90%] my-4 flex items-center justify-center"
          >
            Contact
          </Link>
          <Link
            to="/invest"
            className=" font-[600] font-titles text-lg px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all border-b-[1px] border-gray-700 pb-2 w-[90%] my-4 flex items-center justify-center"
          >
            Invest
          </Link>
          <Link
            to="/whitepaper"
            className=" font-[600] font-titles text-lg px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all border-b-[1px] border-gray-700 pb-2 w-[90%] my-4 flex items-center justify-center"
          >
            Whitepaper
          </Link>
        </ul>
        <div className="flex items-center justify-center">
          <button className="py-4 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center hover:animate-bounce transition-all ease-in-out duration-150 w-[200px] mb-4">
            <img
              src="/download.svg"
              className="w-[14px] h-[14px]"
              alt="download_app"
            />
            <h1 className="font-bold font-titles text-white">Download App</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
