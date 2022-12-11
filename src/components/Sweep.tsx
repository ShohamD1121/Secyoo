import React from "react";

interface Props {
  title: string;
  desc: string | JSX.Element;
  img: string;
  bgColor: string;
}

const Sweep: React.FC<Props> = ({ title, desc, img, bgColor }) => {
  return (
    <div
      className={`flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center ${bgColor} px-0 md:px-10 rounded-xl`}
    >
      <div className="h-4/5 w-full md:w-1/2 flex flex-col justify-evenly items-center">
        <h1 className="text-left 2xl:text-6xl md:text-4xl font-bold w-10/12">
          {title}
        </h1>
        <div className="text-left 2xl:text-xl md:text-[17px] text-sm  text-gray-500 w-10/12 break-words">
          {desc}
        </div>
      </div>
      <div className="p-4 flex md:h-4/5 md:w-1/2">
        <img src={img} />
      </div>
    </div>
  );
};

export default Sweep;
