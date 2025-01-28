/* eslint-disable @typescript-eslint/ban-ts-comment */
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { closeModal } from "../../utils/modalFunctions";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { motion } from "motion/react";

interface InvestorData {
  name: string;
  email: string;
}

function Invest() {
  const [userData, setUserData] = useState<InvestorData>({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const investorsRef = collection(db, "investors");
  const recaptcha = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleInvest(e: any) {
    if (userData?.email !== "" && userData?.name !== "") {
      try {
        setLoading(true);
        e.preventDefault();
        if (!recaptcha.current) {
          setLoading(false);
          toast.error("Please verify the reCAPTCHA!");
          return;
        }
        //@ts-expect-error
        const captchaValue = recaptcha.current.getValue();
        if (!captchaValue) {
          setLoading(false);
          toast.error("Please verify the reCAPTCHA!");
        } else {
          await addDoc(investorsRef, userData);
          toast.success(
            "Your response was sent succefully you will be contacted shortly"
          );
          closeModal("investModal");
          setLoading(false);
          setUserData({
            name: "",
            email: "",
          });
        }
      } catch (error) {
        setLoading(false);
        toast.error(
          "An error occured while sending your response, please try again later"
        );
        console.error(error);
      }
    } else {
      const missingFields = Object.keys(userData).filter(
        (key) => userData[key as keyof InvestorData] === ""
      );
      const edittedFields = missingFields.map(
        (field) => field[0].toUpperCase() + field.slice(1)
      );
      toast.error(`Please fill in the missing fields: ${edittedFields}`);
      // toast.error("Please fill in the form");
      return;
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen backdrop-blur-md">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <section className="pb-32 max-w-[1200px] mx-auto my-0">
        <div className="flex items-center justify-center flex-col md:flex-row mt-12 md:mt-16 gap-4">
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
              src="/invest.svg"
              alt="Invest"
              className="w-[400px] h-[400px] z-10"
            />{" "}
            <img src="/circle.svg" alt="circle" className="absolute h-72" />
          </div>
          <div className="flex items-center justify-center flex-col mt-12">
            <div className="flex flex-col items-center ">
              <h1 className="title font-normal p-1 text-4xl text-center md:text-5xl inline md:mt-0">
                Invest In
              </h1>
              <h1 className="title font-normal p-1 text-4xl text-center md:text-5xl inline md:mt-0">
                ChamaDAO
              </h1>
            </div>
            <p className="font-titles my-4 text-center text-lg md:text-left max-w-[500px]">
              Willing to Invest in us? Please fill in in your contact
              information and we will reach out to you!
            </p>
            <div className="w-[90%] md:w-1/2 lg:w-3/4">
              <div className="flex flex-col my-4">
                <input
                  placeholder="Enter your name here"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  className="text-sm font-semibold border-b-2 bg-white rounded-full py-3 placeholder:text-gray-500 px-4 font-titles mt-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col my-4">
                <input
                  placeholder="Your Email address"
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="text-sm font-semibold border-b-2 bg-white rounded-full py-3 placeholder:text-gray-500 px-4 font-titles mt-2 focus:outline-none"
                />
              </div>
              {/* <ReCAPTCHA sitekey={siteKey} className="h-[150px]" /> */}
              <button
                className="py-3 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center md:mt-4 transition-all ease-in-out duration-150 w-full"
                onClick={handleInvest}
              >
                <h1 className="font-bold font-titles text-white text-sm">
                  Sign Up
                </h1>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-14 w-full bg-transparent"></div>
        <CTA />
      </section>
      <Footer />
    </div>
  );
}

export default Invest;
