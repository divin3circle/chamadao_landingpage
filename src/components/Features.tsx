import { IconChevronRight } from "@tabler/icons-react";
import { useOverlayStore } from "../hooks/overlayStore";

function Features() {
  const { openModal } = useOverlayStore();

  const handleSignUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      openModal();
    }, 700);
  };

  return (
    <div className="mt-8 bg-chamaCream w-full mx-auto my-0 pt-10">
      <div className="max-w-[1200px] my-0 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-[40%] ml-4 md:pr-6 pl-4 md:pl-0">
          <h1 className="title text-4xl font-semibold">
            Chama DAO is accessible to all
          </h1>
          <p className="font-titles my-4 md:my-6 leading-relaxed">
            Whether you're saving for emergencies or building wealth, ChamaDAO
            is here to make financial freedom a reality for everyone.
          </p>
          <button
            className="bg-gradient-to-b from-[#404040] to-[#1A1A1A] w-[130px] h-[47px] py-2 px-2 flex items-center justify-center gap-1 text-chamaWhite rounded-xl mb-8 font-titles"
            onClick={handleSignUpClick}
          >
            Sign Up
            <IconChevronRight size={25} className="" color="white" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <img
            src="/users.svg"
            alt="users"
            className="h-[450px] md:w-[200px] lg:w-[380px] mt-0 md:mt-16"
            loading="lazy"
          />
          <img
            src="/users2.svg"
            alt="users2"
            className="h-[420px] md:w-[200px] lg:w-[380px] mt-0 md:mt-16"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
