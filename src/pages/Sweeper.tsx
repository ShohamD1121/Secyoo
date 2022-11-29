import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import logo from "../images/onlyLogo.png";
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
                <h1 className="text-4xl font-bold w-10/12">Some Header</h1>
                <p className="text-md text-gray-500 w-10/12 break-words">
                  Some Description
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={logo} className="h-[100px] w-[100px]  rounded-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-200 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">Some Header</h1>
                <p className="text-md text-gray-500 w-10/12 break-words">
                  Some Description
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={logo} className="h-[100px] w-[100px]  rounded-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex md:flex-row flex-col w-[90%] h-[90%] justify-center items-center bg-blue-300 px-0 md:px-10">
              <div className="h-4/5 w-full md:w-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-bold w-10/12">Some Header</h1>
                <p className="text-md text-gray-500 w-10/12 break-words">
                  Some Description
                </p>
              </div>
              <div className="p-4 md:h-4/5 md:w-1/3">
                <img src={logo} className="h-[100px] w-[100px]  rounded-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sweeper;
