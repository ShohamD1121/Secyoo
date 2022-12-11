import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import { useOnScreen } from "../hooks/useOnScreen";
import Sweep from "../components/Sweep";
import PenTest from "../images/PenTesting.svg";
import cyber from "../images/cyber.svg";
import antivirus from "../images/antivirus.svg";
import professor from "../images/professor.svg";
import "swiper/css";
import "swiper/css/effect-fade";

const Sweeper: React.FC = () => {
  const ref: any = useRef<any>();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
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
            onScreen ? "before:scale-x-100" : ""
          } before:scale-x-0 before:origin-top-left
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
          <SwiperSlide>
            <Sweep
              title="Penetration Testing"
              desc="Penetration Testing simulates cyber attacks on a company's
                  computer systems and networks to identify vulnerabilities and
                  assess the effectiveness of the company's security measures."
              img={PenTest}
              bgColor="blue-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Sweep
              title="Anti-Virus Bypass"
              desc="                  Anti-virus bypass is needed to understand and defend against
                  the techniques used by malicious software to evade detection
                  and removal."
              img={antivirus}
              bgColor="blue-200"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Sweep
              title="Reverse Engineering and Malware Analysis"
              desc="Malware analysis is needed to understand the behavior and
                  effects of malicious software and to develop effective
                  defenses against it."
              img={cyber}
              bgColor="blue-100"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Sweep
              title="Cyber Security Lectures"
              desc={
                <>
                  <p>Diverse cyber security lectures about : </p>
                  <div className="w-4/5 mx-auto mt-2">
                    <p>- App Sec</p>
                    <p>- Reverse Engineering and Malware Analysis</p>
                    <p>- Low Level Development</p>
                  </div>
                </>
              }
              img={professor}
              bgColor="blue-200"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sweeper;
