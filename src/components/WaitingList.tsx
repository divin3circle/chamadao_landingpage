import { IconXboxXFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useOverlayStore } from "../hooks/overlayStore";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

interface UserData {
  name: string;
  email: string;
  handle: string;
}

function WaitingList() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    handle: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const userRef = collection(db, "early_access");
  const [terms, setTerms] = useState<boolean>(true);
  const { toggleOverlay } = useOverlayStore();

  const handleOverlayAndModal = () => {
    toggleOverlay();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSignUp(e: any) {
    if (!terms) {
      toast.error("Please agree to the terms and conditions");
    }
    if (userData?.email !== "" && userData?.name !== "") {
      try {
        setLoading(true);
        e.preventDefault();
        await addDoc(userRef, userData);
        toast.success("Thank you for signing up");
        toggleOverlay();
        setLoading(false);
        setUserData({
          name: "",
          email: "",
          handle: "",
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong, please try again");
        console.error(error);
      }
    } else {
      console.log("Please fill in the form");
    }
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-transparent">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="p-4 bg-transparent border-[1px] border-chamaWhite mx-1 rounded-2xl w-full md:w-[42%]">
      <div className="bg-white rounded-2xl h-full w-full">
        <div className="flex items-end justify-end">
          <IconXboxXFilled
            className="my-4 mx-4 cursor-pointer"
            size={36}
            color="#000"
            onClick={handleOverlayAndModal}
          />
        </div>

        <div className="flex items-center justify-center">
          <img src="/wait.svg" alt="waiting" className="h-12" />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="title font-normal p-1 text-2xl text-center md:text-start md:text-5xl inline mt-4 md:my-2 md:mt-0">
            Join The Waitlist
          </h1>
          <p className="font-titles text-sm md:text-base w-3/4 text-center text-[#838282]">
            Please enter your email to join our waitlist.
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-8">
          <form className="w-3/4 ">
            <div className="flex flex-col my-4">
              <input
                placeholder="Name"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
                className="text-sm font-normal border-b-2 bg-white rounded-full border-[.1px] border-black py-3 placeholder:text-gray-500 px-4 font-titles mt-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col my-4">
              <input
                placeholder="Email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
                className="text-sm font-normal border-b-2 bg-white rounded-full border-[.1px] border-black py-3 placeholder:text-gray-500 px-4 font-titles mt-2 focus:outline-none"
              />
            </div>
            {/* <div className="flex flex-col my-4">
              <input
                placeholder="Your Twitter handle"
                type="text"
                value={userData.handle}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    handle: e.target.value,
                  })
                }
                className="text-sm font-semibold border-b-2 bg-white rounded-full py-3 placeholder:text-gray-500 px-4 font-titles mt-2 focus:outline-none"
              />
            </div> */}
          </form>
          <div className="flex gap-1 items-center my-4 px-8">
            <input
              type="checkbox"
              defaultChecked
              checked={terms}
              onChange={() => setTerms(!terms)}
              className=""
            />
            <h1 className="text-[0.5rem] font-titles font-bold text-gray-500 leading-snug">
              BY SIGNING UP I{"'"}M AGREEING TO CHMADAO{"'"}S{" "}
              <a href="#" className="text-blue-500 underline">
                TERMS {" & "} CONDITIONS
              </a>
            </h1>
          </div>
          <button
            className={`py-3 mb-8 px-1 bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-[30px] flex items-center gap-1 justify-center md:mt-4 transition-all ease-in-out duration-150 w-3/4 text-chamaWhite font-titles ${
              terms
                ? "cursor-pointer bg-opacity-100"
                : "bg-opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSignUp}
            disabled={!terms}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaitingList;
