import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      {/* carousel container */}
      <div className="sm:p-4 md:py-4 md:px-0 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination
          loop={true}
        >
          <SwiperSlide>
            <div className="w-full relative">
              <div className="w-full h-full bg-slate-500 top-0 left-0 absolute opacity-30"></div>
              <div className="w-full h-full absolute  left-0 flex flex-col justify-center items-center z-50">
                <h1 className="text-2xl md:text-6xl font-bold text-white">
                  Welcome to NSU Mars Ex!
                </h1>
              </div>

              <div className="">
                <Image
                  src="/hero/carousel_3.jpg"
                  alt="rover portrait"
                  layout="responsive"
                  width={1024}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <div className="w-full h-full bg-slate-500 top-0 left-0 absolute opacity-10"></div>
              <div className="w-full h-full absolute -top-10 -left-10 flex flex-row-reverse items-end z-50">
                <h1 className="text-2xl font-bold text-white">
                  Team with the rover
                </h1>
              </div>

              <div className="">
                <Image
                  src="/hero/carousel_2.jpg"
                  alt="team with the rover"
                  layout="responsive"
                  width={1024}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full relative">
              <div className="w-full h-full bg-slate-500 top-0 left-0 absolute opacity-30"></div>
              <div className="w-full h-full absolute  left-0 flex flex-col justify-center items-center z-50">
                <h1 className="text-2xl md:text-5xl font-bold text-white">
                  Welcome to NSU Mars Ex!
                </h1>
              </div>
              <div className="">
                <Image
                  src="/hero/carousel_1.jpg"
                  alt="rover portrait"
                  layout="responsive"
                  width={1024}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
