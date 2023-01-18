import { useState } from "react";

const Faqtab = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex border-b-[1px] border-solid border-black pb-7 pt-7 justify-start items-start flex-col w-full">
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex ${
          active ? "pb-4" : ""
        } cursor-pointer transition-all duration-500 justify-start items-center gap-5 w-full`}>
        <div className="text-white flex justify-center items-center bg-[#C58960] rounded-full min-w-[33px] min-h-[33px] overflow-hidden">
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </div>
        <h3 className="text-lg sm:text-2xl font-medium text-black text-left">
          {question}
        </h3>
      </div>
      <div
        className={`flex justify-start overflow-hidden transition-all duration-500 items-start pl-3 border-l-[1px] border-solid border-black sm:ml-[73px] ${
          active ? "max-h-[2000px]" : "max-h-0"
        }`}>
        <p className="text-base sm:text-lg text-black max-w-[900px] opacity-70">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faqtab;
