interface Feature {
  id: number;
  title: string;
  icon: string;
  description: string;
}
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-lg h-[320px] md:w-[300px] relative shadow-lg bg-[#F0F9F7] cursor-pointer group mt-4">
      <img
        src={feature.icon}
        className="w-14 h-14 group-hover:w-16 group-hover:h-16 absolute top-[-24px] right-[40%] transition-all duration-150 ease-in opacity-70 group-hover:opacity-100"
      />
      <h1 className="font-bold font-titles px-2 text-xl group-hover:text-2xl text-center mt-16 transition-all duration-500 ease-in opacity-70 group-hover:opacity-100">
        {feature.title}
      </h1>
      <p className="font-titles text-sm leading-relaxed opacity-80 group-hover:opacity-100 my-2 p-2 px-4 text-center">
        {feature.description}
      </p>
      <div className="h-[320px] md:w-[300px] w-full z-[-1] left-[-10px] top-[10px] bg-gradient-to-b to-[#7FC786] from-[#89D3DC] opacity-0 absolute rounded-lg group-hover:opacity-100 ease-in-out duration-150 transition-all"></div>
    </div>
  );
}
function Features() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Scalable and Efficient",
      icon: "/secure.svg",
      description:
        "Say goodbye to manual inefficiencies and embrace a fully automated system that scales with your chama.",
    },
    {
      id: 2,
      title: "Secure and Transparent",
      icon: "/scalable.svg",
      description:
        "Thanks to the immutability of blockchain systems, onchain chama activities are visible to all the members of the chama and a finacial report can be easily generated from the existing immutable onchain data.",
    },
    {
      id: 3,
      title: "Accessible to All",
      icon: " /accesible.svg",
      description:
        "Are you saving for emergencies or building wealth? ChamaDAO makes financial freedom a reality for everyone.",
    },
  ];
  return (
    <div className="mt-12 lg:max-w-[1040px] w-full mx-auto my-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-body bg-[#363636] p-1 text-4xl lg:text-5xl mt-4 md:mt-0 font-bold inline">
          Why ChamaDAO?
        </h1>
        <p className="text-black text-center font-titles p-1 text-lg font-light mt-2 md:mt-4">
          Save, pool, and borrow funds directly with no intermediaries.
          Experience the future of efficient, secure, and scalable financial
          collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-8 px-4 md:px-0">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
