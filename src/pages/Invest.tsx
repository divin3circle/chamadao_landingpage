import Features from "../components/Features";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { closeModal } from "../../utils/modalFunctions";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Footer from "../components/Footer";
interface InvestorData {
  name: string;
  email: string;
}

function Invest() {
  const [investorData, setInvestorData] = useState<InvestorData>({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const investorsRef = collection(db, "investors");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleInvest(e: any) {
    if (investorData?.email !== "" && investorData?.name !== "") {
      try {
        setLoading(true);
        e.preventDefault();
        await addDoc(investorsRef, investorData);
        toast.success("Investment submitted successfully");
        closeModal("investModal");
        setLoading(false);
        setInvestorData({
          name: "",
          email: "",
        });
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
    <div>
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <section className="pb-32 max-w-[1140px] mx-auto my-0">
        <div className="modal-box flex flex-col md:flex-row md:gap-4 w-full md:w-[80%] mx-auto my-0 mb-14 mt-32">
          <div className="flex flex-col flex-3 rounded-lg items-center justify-center md:w-[40%] bg-gradient-to-b from-[#89D3DC] to-[#7FC786] mx-2">
            <img
              src="/invest.svg"
              className="object-cover h-auto rounded-lg"
              alt="join"
            />
          </div>
          <div className="flex flex-col flex-1 px-4">
            <div className="w-full flex flex-col relative">
              <div className="">
                <h1 className="text-white font-titles w-[11rem] bg-[#363636] p-1 text-3xl mt-8 font-bold">
                  INVEST IN
                </h1>
                <h1 className="text-white font-titles w-[300px] bg-[#363636] p-1 text-3xl mt-1 font-bold">
                  THE CHAMADAO
                </h1>
              </div>

              <form className="">
                <div className="flex flex-col my-4">
                  <label className="font-titles font-bold text-sm">NAME</label>
                  <input
                    placeholder="Enter your name here"
                    type="text"
                    value={investorData.name}
                    onChange={(e) =>
                      setInvestorData({
                        ...investorData,
                        name: e.target.value,
                      })
                    }
                    className="text-sm font-semibold border-b-2 bg-transparent border-[#9E9E9E] font-titles mt-2 focus:outline-none text-gray-700 placeholder:text-gray-500"
                  />
                </div>
                <div className="flex flex-col mb-4 mt-6">
                  <label className="font-titles font-bold text-sm">EMAIL</label>
                  <input
                    placeholder="Your Email address"
                    type="email"
                    value={investorData.email}
                    onChange={(e) =>
                      setInvestorData({
                        ...investorData,
                        email: e.target.value,
                      })
                    }
                    className="text-sm font-semibold border-b-2 bg-transparent border-[#9E9E9E] text-gray-700 font-titles mt-2 focus:outline-none placeholder:text-gray-500"
                  />
                </div>
              </form>
              <div className="flex gap-1 items-center mt-2">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className="checkbox checkbox-success text-[#7FC786]"
                />
                <h1 className="text-[0.5rem] font-titles font-bold text-gray-500">
                  I AM NOT A ROBOT
                </h1>
              </div>
              <button
                className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4 my-8"
                onClick={handleInvest}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Features />
      </section>
      <Footer />
    </div>
  );
}

export default Invest;
