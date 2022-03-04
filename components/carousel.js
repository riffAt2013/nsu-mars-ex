import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

export default function Carousel() {
  return (
    <>
      <div className="p-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination
        >
          <SwiperSlide>
            <div className="w-full relative">
              <div className="w-full h-full bg-slate-500 top-0 left-0 absolute opacity-20"></div>
              <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center z-30">
                <h1 className="text-2xl font-bold text-white">
                  Welcome to NSU Mars Ex!
                </h1>
              </div>
              <img src="https://picsum.photos/1366/750" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/1366/750" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/1366/750" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/1366/750" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
