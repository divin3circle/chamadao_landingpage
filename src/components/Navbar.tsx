// import { IconMenuDeep, IconX } from "@tabler/icons-react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { openModal } from "../../utils/modalFunctions";
// import { useOverlayStore } from "../hooks/overlayStore";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleNavbar = () => setIsOpen(!isOpen);
  // const { toggleOverlay } = useOverlayStore();

  // const handleOverlayAndModal = () => {
  //   openModal("joinModal");
  //   toggleOverlay();
  // };
  return (
    <div className="flex items-center justify-between md:my-4 my-2 mx-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-1">
            <img src="/logo.svg" alt="thechamadao" className="h-10 w-10" />
            <h1 className="font-titles text-2xl font-bold">The ChamaDAO</h1>
          </Link>
          <div className="flex items-center justify-around">
            <Link
              to="/story"
              className=" font-[500] font-titles text-xl px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Our Story
            </Link>
            <Link
              to="/contact-us"
              className=" font-[500] font-titles text-xl px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Contat
            </Link>
            <Link
              to="/invest"
              className=" font-[500] font-titles text-xl px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Invest
            </Link>
            <Link
              to="/whitepaper"
              className=" font-[500] font-titles text-xl px-2 hover:opacity-70 hover:scale-95 ease-in duration-150 transition-all"
            >
              Whitepaper
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button className="py-4 px-2 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center hover:animate-bounce transition-all ease-in-out duration-150 w-[170px]">
              <img
                src="/download.svg"
                className="w-[15px] h-[15px]"
                alt="download_app"
              />
              <h1 className="text-base font-bold font-titles text-white">
                Download App
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
