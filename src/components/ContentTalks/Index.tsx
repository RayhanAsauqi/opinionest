"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideLeft from "../../../public/icons/slideLeft";
import CardReport from "../CardReport/Index";
import Search from "../Search/Index";

// Import Swiper styles
import "swiper/css";

export default function ContentTalks() {
  return (
    <div className="flex flex-col w-full">
      <Search />

      {/* Latest Talks */}
      <div className="flex flex-col mt-[24px]">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-black font-pop text-[20px] font-medium leading-[170%]">
            Latest Talks
          </h3>
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-row items-center gap-[4px]">
              <button className="bg-primary p-[5px] rounded-full">
                <SlideLeft className="text-white" />
              </button>
              <button className="bg-primary p-[5px] rounded-full">
                <SlideLeft className="rotate-180 text-white" />
              </button>
            </div>
            <button className="bg-primary px-[18px] py-[9px] rounded-full text-white font-pop text-[10px] font-normal leading-normal">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-[16px]">
          <Swiper className="mySwiper">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={`${item}-${index}`}>
                <CardReport
                  profile="profile.svg"
                  name="Reza Arif Maulana"
                  hours="2 Hours ago"
                  status="waiting to be resolved"
                  type="report"
                  to="Direktorat TSI"
                  title="Lorem ipsum dolor sit amet"
                  desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
                  images="profile.svg"
                  href="/"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popular Talks */}
      <div className="flex flex-col mt-[24px]">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-black font-pop text-[20px] font-medium leading-[170%]">
            Popular Talks
          </h3>
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-row items-center gap-[4px]">
              <button className="bg-primary text-white p-[5px] rounded-full">
                <SlideLeft />
              </button>
              <button className="bg-primary text-white p-[5px] rounded-full">
                <SlideLeft className="rotate-180" />
              </button>
            </div>
            <button className="bg-primary px-[18px] py-[9px] rounded-full text-white font-pop text-[10px] font-normal leading-normal">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-[16px]">
          <Swiper className="mySwiper">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={`${item}-${index}`}>
                <CardReport
                  profile="profile.svg"
                  name="Reza Arif Maulana"
                  hours="2 Hours ago"
                  status="waiting to be resolved"
                  type="report"
                  to="Direktorat TSI"
                  title="Lorem ipsum dolor sit amet"
                  desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
                  images="profile.svg"
                  href="/"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
