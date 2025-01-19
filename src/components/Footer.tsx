import {
  IconBookFilled,
  IconBrandAppstore,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconChecklist,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="md:h-[300px] h-[350px] pt-8 bg-gradient-to-b from-[#404040] to-[#1A1A1A] md:pt-12">
      <div className="max-w-[1090px] my-0 mx-auto grid grid-cols-2 md:grid-cols-4 content-center px-2 gap-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-[20px] w-[20px] ml-0"
            />
            <h1 className="font-titles font-bold text-white text-base ml-1">
              <span className="text-[#7FC786]">The</span>
              Chama
              <span className="text-[#7FC786]">DAO</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm font-titles">Copyright © 2025</p>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">Follow Us</h1>
          <a
            className="flex items-center gap-2"
            href="https://x.com/TheChamaDAO"
            target="_blank"
          >
            <IconBrandX size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Twitter
            </p>
          </a>
          <a
            className="flex items-center gap-2 my-4"
            href="https://www.linkedin.com/company/chama-dao"
            target="_blank"
          >
            <IconBrandLinkedin size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Linkedin
            </p>
          </a>
          <a
            className="flex items-center gap-2 my-2"
            href="https://github.com/Chama-DAO"
            target="_blank"
          >
            <IconBrandGithub size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Github
            </p>
          </a>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">Company</h1>
          <Link className="flex items-center gap-2" to="/invest">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Join ChamaDAO
            </p>
          </Link>
          <a className="flex items-center gap-2" href="#about">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              About
            </p>
          </a>
          <Link className="flex items-center gap-2" to="/our-story">
            <p className="text-white text-sm font-titles my-2 hover:underline ease-in duration-200 hover:text-[#7FC786] transition-all cursor-pointer">
              Meet the Team
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-white font-bold font-titles mb-4">Resources</h1>
          <Link
            className="flex items-center gap-2 cursor-pointer group"
            to="/download"
          >
            <IconBrandAppstore size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Download App
            </p>
          </Link>
          <Link
            className="flex items-center gap-2 cursor-pointer group"
            to="/whitepaper"
          >
            <IconBookFilled size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Whitepaper
            </p>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer group">
            <IconChecklist size={20} color="#7FC786" />
            <p className="text-white text-sm font-titles my-2 group-hover:underline ease-in duration-150 group-hover:text-[#7FC786] transition-all">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
