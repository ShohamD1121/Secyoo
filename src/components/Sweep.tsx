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
      className={`flex md:flex-row flex-col w-[90%] h-[90%] justify-around items-center ${bgColor} px-0 md:px-10 rounded-xl`}
    >
      <div className="h-[300px] md:h-4/5 w-full md:w-1/2 flex flex-col  md:justify-evenly items-center">
        <div className="flex h-1/3">
          <h1 className="text-center md:text-left 2xl:text-6xl md:text-4xl text-[20px] font-bold mt-5 px-3 ">
            {title}
          </h1>
        </div>
        <div className="flex justify-center h-2/3 py-5">
          <div className="text-left 2xl:text-xl md:text-[17px] mt-2 md:mt-0 text-sm  text-gray-500  break-words px-3">
            {desc}
          </div>
        </div>
      </div>
      <div className="p-4 flex h-[180px] md:h-4/5 md:w-1/2">
        <img src={img} />
      </div>
    </div>
  );
};

export default Sweep;
