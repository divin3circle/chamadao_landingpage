import { IconChevronRight } from "@tabler/icons-react";

function About() {
  const workingList = [
    {
      id: 1,
      title: "One platform for all your needs",
      subtitles: [
        "Create or Join a Chama:",
        "Contribute Seamlessly:",
        "Borrow Effortlessly ",
        "Earn Rewards:",
      ],
      description: [
        "Set up a chama in minutes or join an existing one.",
        "Weekly contributions automated via mobile money services like MPesa.",
        "Access low-interest loans with guarantors ensuring fair and transparent lending.",
        "Receive payouts at the end of each cycle, including bonuses for consistent participation",
      ],
      image: "/one.svg",
    },
    {
      id: 2,
      title: "Secure & Transparent",
      subtitles: [],
      description: [
        "Thanks to the immutability of blockchain systems, onchain chama activities are visible to all the members of the chama",
      ],
      image: "/two.svg",
    },
    {
      id: 3,
      title: "Scalable & Efficient",
      subtitles: [],
      description: [
        "Say goodbye to manual inefficiencies and embrace a fully automated system tailored to your exact taste.",
      ],
      image: "/three.svg",
    },
  ];
  return (
    <div className="mt-20 flex items-center flex-col mx-2">
      <h1 className="text-body text-4xl my-8 font-body font-bold text-center w-full md:max-w-[45%]">
        The smarter way to manage your savings
      </h1>
      <p className="my-2 font-titles text-lg w-full md:max-w-[65%] text-center">
        ChamaDAO is a blockchain-powered platform transforming the traditional
        Kenyan chama model into a global solution for savings and loans.
      </p>
      <div className="bg-gradient-to-b from-[#404040] to-[#1A1A1A] rounded-2xl px-2 flex flex-col md:flex-row h-[600px] md:h-[480px] w-full mt-8">
        <ul className="my-2 ml-4 md:w-[45%] flex-col gap-2">
          <h1 className="text-chamaWhite font-bold font-body text-xl my-8">
            {workingList[0].title}
          </h1>
          <li className="text-white font-body my-2 md:my-4 relative text-base">
            <span className="bg-gradient-to-b from-[#89D3DC] to-[#7FC786] rounded-full h-3 w-3 absolute top-0 left-0"></span>
            <span className="font-bold ml-4">
              {workingList[0].subtitles[0]}
            </span>
            <span className=" ml-2">{workingList[0].description[0]}</span>
          </li>
          <li className="text-white font-body my-2 md:my-4 relative text-base">
            <span className="bg-gradient-to-b from-[#89D3DC] to-[#7FC786] rounded-full h-3 w-3 absolute top-0 left-0"></span>
            <span className="font-bold ml-4">
              {workingList[0].subtitles[1]}
            </span>
            <span className=" ml-2">{workingList[0].description[1]}</span>
          </li>
          <li className="text-white font-body my-2 md:my-4 relative text-base">
            <span className="bg-gradient-to-b from-[#89D3DC] to-[#7FC786] rounded-full h-3 w-3 absolute top-0 left-0"></span>
            <span className="font-bold ml-4">
              {workingList[0].subtitles[2]}
            </span>
            <span className=" ml-2">{workingList[0].description[2]}</span>
          </li>
          <li className="text-white font-body my-2 md:my-4 relative text-base">
            <span className="bg-gradient-to-b from-[#89D3DC] to-[#7FC786] rounded-full h-3 w-3 absolute top-0 left-0"></span>
            <span className="font-bold ml-4">
              {workingList[0].subtitles[3]}
            </span>
            <span className=" ml-2">{workingList[0].description[3]}</span>
          </li>
          <a
            className="font-titles font-bold text-sm text-white flex gap-2 mt-4 md:mt-10 mb-4 hover:opacity-70 duration-100 ease-in"
            href="#"
          >
            Learn More
            <IconChevronRight size={20} />
          </a>
        </ul>
        <div className="flex md:w-1/2 w-full h-full md:overflow-hidden flex-col items-end relative">
          <img
            src="/one.svg"
            alt="chamadao"
            className="md:h-[90%] w-full md:w-auto absolute bottom-0 right-0 h-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2 w-full">
        <div className="bg-chamaGreen px-2 w-full md:w-1/2 h-[350px] rounded-2xl relative">
          <div className="ml-4 flex flex-col md:flex-row ">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-chamaBlack font-bold font-body text-xl my-8">
                {workingList[1].title}
              </h1>
              <p className="font-titles leading-relaxed">
                {workingList[1].description[0]}
              </p>
              <a
                className="font-titles font-bold text-sm text-chamaBlack flex gap-2 mt-14 md:mt-10 mb-4 hover:opacity-70 duration-100 ease-in"
                href="#"
              >
                Learn More
                <IconChevronRight size={20} />
              </a>
            </div>
            <img
              src="/two.svg"
              alt="chamadao"
              className="absolute bottom-6 right-2 md:h-40 lg:h-48 h-36"
            />
          </div>
        </div>
        <div className="bg-chamaYellow px-2 w-full md:w-1/2 h-[350px] rounded-2xl relative">
          <div className="ml-4 flex flex-col md:flex-row ">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-chamaBlack font-bold font-body text-xl my-8">
                {workingList[2].title}
              </h1>
              <p className="font-titles leading-relaxed">
                {workingList[2].description[0]}
              </p>
              <a
                className="font-titles font-bold text-sm text-chamaBlack flex gap-2 mt-14 md:mt-10 mb-4 hover:opacity-70 duration-100 ease-in"
                href="#"
              >
                Learn More
                <IconChevronRight size={20} />
              </a>
            </div>
            <img
              src="/three.svg"
              alt="chamadao"
              className="absolute bottom-6 right-2 md:h-40 lg:h-48 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
