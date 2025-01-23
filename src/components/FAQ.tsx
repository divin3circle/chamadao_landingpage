import { IconMinus, IconMinusVertical, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

interface TFAQ {
  title: string;
  description: string;
}

function FAOCard({ faq }: { faq: TFAQ }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="py-4 border-[#B1B1B1] border-t-[1px] w-full cursor-pointer transition-all duration-300 ease-in"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-4">
        {isOpen ? <IconMinus size={24} color="#B1B1B1" /> : null}
        {!isOpen ? <IconPlus size={24} color="#B1B1B1" /> : null}
        <h1 className="font-titles font-bold text-base md:text-lg">
          {faq.title}
        </h1>
      </div>
      {isOpen && (
        <div>
          <div className="flex gap-4 flex-row items-center -ml-1">
            <IconMinusVertical size={36} color="#B1B1B1" />
            <p className="text-sm md:text-base font-titles leading-relaxed mt-2">
              {faq.description}
            </p>
          </div>
          <a className="text-xs text-blue-700 underline font-titles font-semibold ml-4 mt-4 text-center">
            Learn More
          </a>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const faqs: TFAQ[] = [
    {
      title: "What's the minimum contribution?",
      description:
        "The default amount Ksh. 250 / Week, but chama members can customize it.",
    },
    {
      title: "How are loans secured?",
      description:
        "Loans given to chama members are based on a reputation and gurrantor basis.",
    },
    {
      title: "Do I need to be in Kenya to use ChamaDAO?",
      description:
        "No, Thanks to blockchain technology, savings groups around the globe can access the app's features.",
    },
    {
      title: "Can I be part of multiple Chamas?",
      description:
        "Yes, users can be part of different chamas on the platform independent of one another.",
    },
    {
      title: "How the interest rate on loans determined?",
      description:
        "Intrest loans are set as chama parameters when the chama is being created, but can be changed by chama members through voting.",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col mt-12 max-w-[1040px] mx-auto my-0">
      <h1 className="text-white font-body bg-[#363636] p-1 md:text-3xl text-xl inline mt-4 md:my-2 md:mt-0 font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-2 mt-8 w-full mx-auto my-0 ease-in duration-300 transition-all border-b-[1px] border-[#B1B1B1] mb-8">
        {faqs.map((faq) => (
          <div key={faq.title}>
            <FAOCard faq={faq} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
