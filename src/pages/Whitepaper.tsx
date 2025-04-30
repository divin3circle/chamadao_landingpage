import whitepaper from "../assets/image.png";
import whitepaperPdf from "../assets/The_ChamaDAO_Whitepaper.pdf";
import Navbar from "../components/Navbar";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "motion/react";

function Whitepaper() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <motion.div
          className="bg-[#f6f7f9] border border-[#e5e6eb] rounded-lg p-4 w-full md:w-1/2 shadow-sm"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-[10px] w-[10px] ml-4"
            />
            <motion.h1
              className="font-titles font-bold text-black text-sm ml-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#7FC786]">The</span>
              Chama
              <span className="text-[#7FC786]">DAO</span>
            </motion.h1>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center gap-2 md:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={whitepaper}
              alt="Whitepaper"
              className="object-contain rounded-lg w-auto h-44 my-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex items-center justify-center flex-col md:flex-row">
              <h1 className="font-titles text-black text-sm ml-2">
                Download Whitepaper
              </h1>
              <a href={whitepaperPdf} className="text-gray-500 text-sm ml-2">
                <IconDownload />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Whitepaper;
