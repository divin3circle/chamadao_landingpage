function About() {
  const workingList = [
    {
      title: "Create or Join a Chama",
      description: "Set up a chama in minutes or join an existing one.",
    },
    {
      title: "Contribute Seamlessly",
      description:
        "Weekly contributions automated via mobile money services like MPesa.",
    },
    {
      title: "Borrow Effortlessly",
      description:
        "Access low-interest loans with guarantors ensuring fair and transparent lending using a community based protocol.",
    },
    {
      title: "Earn Rewards",
      description:
        "Receive payouts at the end of each cycle, including bonuses for consistent participation.",
    },
  ];
  return (
    <div className="lg:max-w-[1040px] w-full mx-auto my-0 px-2 pt-8">
      <div className="flex flex-col md:flex-row md:justify-between justify-center mt-16">
        <div className="flex justify-center items-center relative flex-1 mb-8 md:mb-0">
          <img
            src="/hero1.svg"
            alt="Hero"
            className="h-[400px] md:w-[350px] w-full z-[1]"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-white font-body bg-[#363636] text-4xl lg:text-5xl inline-block mt-8 md:mt-0 font-bold">
            What is ChamaDAO?
          </h1>
          <p className="text-black font-titles p-1 font-light mt-2 md:mt-0">
            ChamaDAO is a blockchain-powered platform transforming the
            traditional Kenyan chama model into a global solution for savings
            and loans. Leveraging decentralized governance, ChamaDAO eliminates
            inefficiencies, automates contributions, and empowers members to
            achieve financial independence.
          </p>
          <h1 className="text-2xl font-titles font-bold mt-4 mb-1">
            How it Works?
          </h1>
          <ul className="list-disc list-inside">
            {workingList.map((item, index) => (
              <li
                key={index}
                className="text-black font-titles p-2 flex flex-row"
              >
                <div className="bg-gradient-to-r from-[#89D3DC] to-[#7FC786] w-1 h-1 rounded-[50%] mb-1 p-2 mx-2"></div>
                <p className="font-light">
                  <span className="font-bold font-titles">{item.title}: </span>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
