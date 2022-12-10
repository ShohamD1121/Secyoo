import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import logo from "../images/onlyLogo.png";
import PenTest from "../images/PenTesting.svg";
import cyber from "../images/cyber.svg";
import antivirus from "../images/antivirus.svg";
import professor from "../images/professor.svg";
import "swiper/css";
import "swiper/css/effect-fade";

const Sweeper: React.FC = () => {
  return (
    <>
      <div className="flex items-center h-screen bg-cyan-50">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-100 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">
                  Penetration Testing
                </h1>
                <p className="text-md text-left  text-gray-500 w-10/12 break-words">
                  Penetration Testing simulates cyber attacks on a company's
                  computer systems and networks to identify vulnerabilities and
                  assess the effectiveness of the company's security measures.
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={PenTest} className="h-[100px] w-[100px] " />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-200 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">
                  Anti-Virus Bypass
                </h1>
                <p className="text-md text-gray-500 w-10/12 break-words text-left">
                  Anti-virus bypass is needed to understand and defend against
                  the techniques used by malicious software to evade detection
                  and removal.
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={antivirus} className="h-[100px] w-[100px]" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-300 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">
                  Reverse Engineering and Malware Analysis
                </h1>
                <p className="text-md text-left text-gray-500 w-10/12 break-words">
                  Malware analysis is needed to understand the behavior and
                  effects of malicious software and to develop effective
                  defenses against it.
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={cyber} className="h-[100px] w-[100px]" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-300 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">
                  Cyber Security Lectures
                </h1>
                <p className="text-md text-left text-gray-500 w-10/12 break-words">
                  Diverse cyber security lectures about <br />
                  &nbsp; &nbsp; &nbsp; - App Sec
                  <br />
                  &nbsp; &nbsp; &nbsp; - Reverse Engineering and Malware
                  Analysis <br />
                  &nbsp; &nbsp; &nbsp; - Low Level Development
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={professor} className="h-[100px] w-[100px]" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sweeper;
