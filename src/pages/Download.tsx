import { motion } from "framer-motion";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fff4] via-white to-[#e6fffa] px-4 py-8">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-[30px] w-[30px] ml-4" />
          <motion.h1
            className="font-titles font-bold text-black text-xl ml-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#7FC786]">The</span>
            Chama
            <span className="text-[#7FC786]">DAO</span>
          </motion.h1>
        </Link>
        <button className=" font-titles text-black px-6 py-2 rounded-full">
          Get ChamaDAO App Today
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-black font-body text-white text-sm px-4 py-1 rounded-full">
              New
            </span>
            <span className="ml-2 text-sm font-body">
              Your Smart Finance Companion
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold mt-6 mb-4 font-titles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Ultimate Financial
            <br />
            Management App
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg mb-8 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Empowering you to take charge of your financial future with
            <br />
            intuitive tools and personalized insights.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="md:py-3 animate-shimmer inline-flex py-2 px-1 bg-[#0e0e0e] rounded-[35px] items-center md:gap-1 justify-center ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] border border-slate-800 bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <IconBrandAppstore size={30} color="white" />
              <div className="flex items-start flex-col">
                <h1 className="font-titles font-bold text-white">App Store</h1>
              </div>
            </button>
            <button className="bg-white animate-shimmer inline-flex text-black px-8 py-3 border border-gray-200 hover:bg-gray-50 transition rounded-[35px] items-center md:gap-1 justify-center ease-in-out duration-150 w-[90%] gap-2 md:w-[210px] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <IconBrandGooglePlay size={30} color="#0e0e0e" />
              <div className="flex items-start flex-col">
                <h1 className="font-titles font-bold text-[#0e0e0e]">
                  Google Play
                </h1>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 font-titles">
              Goal-Based Savings
            </h2>
            <p className="text-gray-600 mb-8 font-body">
              Empowering you to take charge of your financial future with
              intuitive tools and personalized insights.
            </p>

            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                <img
                  src="/user3.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/user3.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/user3.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold font-titles">2.5M</div>
                <div className="text-gray-600 font-body">Active Users</div>
              </div>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/iphone.png"
              alt="App Interface"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          <div className="mt-16 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2 font-titles">
              Best on the market
            </h3>
            <p className="text-gray-600 font-body">
              I love this product because the support is great. Please...
            </p>
            <p className="text-gray-800 font-medium mt-2 font-titles">
              Alex White
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
