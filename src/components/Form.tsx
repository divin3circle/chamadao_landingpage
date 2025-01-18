import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { toast } from "react-toastify";

type FormProps = {
  title: string;
  value: string;
  icon: string;
};
interface UserData {
  name: string;
  email: string;
  message: string;
}

function Card({ formItem }: { formItem: FormProps }) {
  return (
    <div className="flex items-center gap-2 w-[300px]">
      <img src={formItem.icon} alt={formItem.title} className="w-10 h-10" />
      <div className="flex flex-col">
        <h1 className="font-titles font-bold text-sm">{formItem.title}</h1>
        <h1 className="font-titles text-base">{formItem.value}</h1>
      </div>
    </div>
  );
}

function Form() {
  const formItems: FormProps[] = [
    {
      title: "Location",
      value: "Nairobi, Kenya",
      icon: "/location.svg",
    },
    {
      title: "Phone",
      value: "+254 701 838 690",
      icon: "/phone.svg",
    },
    {
      title: "Email",
      value: "info@thechamadao.com",
      icon: "/mail.svg",
    },
    {
      title: "Twitter",
      value: "@TheChamaDAO",
      icon: "/x.svg",
    },
  ];
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const userRef = collection(db, "users");

  async function handleSubmit() {
    if (userData) {
      try {
        setLoading(true);
        console.log(userData);
        await addDoc(userRef, userData);
        toast.success("Thank you for sharing your message");
        setLoading(false);
        setUserData({
          name: "",
          email: "",
          message: "",
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
    <div className="mt-20 w-full lg:max-w-[1240px] my-0 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-white font-titles w-[11.5rem] bg-[#363636] p-1 text-3xl mt-8 font-bold">
        Contact Us
      </h1>
      <div className="bg-gradient-to-r from-[#89D3DC] to-[#7FC786] mt-8 flex flex-col md:flex-row md:justify-between w-full md:w-3/4 py-12 px-12 rounded-2xl items-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          {formItems.map((item) => (
            <div key={item.title}>
              <Card formItem={item} />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-10">
          <div className="flex flex-col my-4">
            <label className="font-titles font-bold text-sm">NAME</label>
            <input
              placeholder="Enter your name here"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
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
                setUserData({ ...userData, email: e.target.value })
              }
              className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="font-titles font-bold text-sm">MESSAGE</label>
            <textarea
              placeholder="Tell us something"
              rows={5}
              value={userData.message}
              onChange={(e) =>
                setUserData({ ...userData, message: e.target.value })
              }
              className="text-sm font-semibold border-b-2 bg-transparent placeholder:text-gray-500 border-[#9E9E9E] font-titles mt-2 focus:outline-none"
            />
          </div>
          <button
            className="bg-[#FCE9B6] text-[#000] font-titles font-bold text-sm px-4 py-2 rounded-md mr-4"
            onClick={handleSubmit}
            // disabled={
            //   loading || !userData.message || !userData.name || !userData.email
            // }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
