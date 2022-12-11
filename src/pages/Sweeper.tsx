import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/useOnScreen";
import { services } from "../utils/servicesData";
import Sweep from "../components/Sweep";
import "swiper/css";
import "swiper/css/effect-fade";

const Sweeper: React.FC = () => {
  const ref: any = useRef<any>();
  const onScreen: boolean = useOnScreen<HTMLHeadingElement>(ref, "-100px");

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-cyan-50">
        <motion.h1
          ref={ref}
          layoutId="underline"
          className={`2xl:text-7xl md:text-5xl  text-3xl font-bold text-[#ef426f] relative before:content-[''] before:absolute before:block before:w-full before:h-[4px] 
          before:bottom-0 before:left-0 before:bg-[#ef426f]
          ${
            onScreen ? "before:scale-x-100" : "before:scale-x-0"
          }  before:origin-top-left
          before:transition before:ease-in-out before:duration-700`}
        >
          Our Services
        </motion.h1>
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
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Sweep
                title={service.title}
                desc={service.desc}
                img={service.img}
                bgColor={service.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Sweeper;
