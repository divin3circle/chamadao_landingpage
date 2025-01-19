import { IconX } from "@tabler/icons-react";
import { closeModal } from "../../utils/modalFunctions";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { useState } from "react";
import { useOverlayStore } from "../hooks/overlayStore";

interface UserData {
  name: string;
  email: string;
  handle: string;
}
function JoinModal() {
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
    closeModal("joinModal");
    toggleOverlay();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSignUp(e: any) {
    if (userData?.email !== "" && userData?.name !== "") {
      try {
        setLoading(true);
        e.preventDefault();
        await addDoc(userRef, userData);
        toast.success("Thank you for signing up");
        closeModal("joinModal");
        setLoading(false);
        setUserData({
          name: "",
          email: "",
          handle: "",
        });
        setLoading(false);
        handleOverlayAndModal();
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
      <div className="flex items-center justify-center h-screen backdrop-blur-md">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      {/* //TO-DO //Add global state manager to control overlay state */}
      <dialog
        id="joinModal"
        className="modal border-none rounded-2xl bg-blend-darken bg-white w-full md:w-[700px] md:h-[450px]"
      >
        <div className="modal-box flex flex-col md:flex-row md:gap-4 ">
          <div className="flex flex-col flex-3 items-center justify-center md:w-[40%] bg-gradient-to-b from-[#89D3DC] to-[#7FC786]">
            <div className="px-4">
              <h1 className="text-white font-titles w-[7.5rem] bg-[#363636] p-1 text-2xl mt-8 font-bold">
                Join The
              </h1>
              <h1 className="text-white font-titles w-36 bg-[#363636] p-1 text-xl mt-1 font-bold">
                Waiting List
              </h1>
            </div>
            <img
              src="/signup.svg"
              className="object-contain md:h-[450px]"
              alt="join"
            />
          </div>
          <div className="flex flex-col flex-1 px-4 z-50">
            <div className="w-full flex flex-col relative">
              <IconX
                size={24}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={handleOverlayAndModal}
              />
              <div className="md:mt-16 mt-12">
                <h1 className="font-titles md:text-lg font-extrabold">
                  WE ARE LAUNCHING SOON! BE THE
                </h1>
                <h1 className="font-titles md:text-lg font-extrabold">
                  FIRST TO EXPERIENCE CHAMADAO
                </h1>
              </div>
              <form className="">
                <div className="flex flex-col my-4">
                  <label className="font-titles font-bold text-sm">NAME</label>
                  <input
                    placeholder="Enter your name here"
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        name: e.target.value,
                      })
                    }
                    className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="font-titles font-bold text-sm">EMAIL</label>
                  <input
                    placeholder="Your Email address"
                    type="email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                    className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="font-titles font-bold text-sm">
                    TWITTER/X
                  </label>
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
                    className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
                  />
                </div>
              </form>
              <div className="flex gap-1 items-center mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  checked={terms}
                  onChange={() => setTerms(!terms)}
                  className="checkbox checkbox-success text-[#7FC786]"
                />
                <h1 className="text-[0.5rem] font-titles font-bold text-gray-500">
                  BY SIGNING UP I{"'"}M AGREEING TO CHMADAO{"'"}S{" "}
                  <a href="#" className="text-blue-500 underline">
                    TERMS {" & "} CONDITIONS
                  </a>
                </h1>
              </div>
              <button
                className={`font-titles font-bold text-sm px-4 py-2 rounded-md mr-4 my-8 ${
                  terms
                    ? "bg-[#FCE9B6] text-[#000]"
                    : "bg-[#9E9E9E] text-[#000] cursor-not-allowed"
                }`}
                onClick={handleSignUp}
                disabled={!terms}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default JoinModal;
