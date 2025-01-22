import clsx from "clsx";
import { useRef, useState, useEffect, MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import SlideLeft from "../../../public/icons/slideLeft";
import CardReport from "../CardReport/Index";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

interface Item {
  fullname: any;
  title: any;
  datecreated: any;
  to: any;
  message: any;
  tags: any;
  type: any;
  status: any;
  like: any;
  dislike: any;
  reply: any;
  _id: any;
}

type ContentTalksProps = {
  title: string;
  form: Item[];
  isForm: boolean;
};

const SwiperTalks = ({ title, form, isForm }: ContentTalksProps) => {
  const swiperRef = useRef<SwiperType | null>(
    null
  ) as MutableRefObject<SwiperType | null>;
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <div className="flex flex-col mt-[24px]">
      {/* Latest Talks */}
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-black font-pop text-[20px] font-medium leading-[170%]">
          {title}
        </h3>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="flex flex-row items-center gap-[4px]">
            <button
              className={clsx(
                isBeginning ? "bg-[#D5D5D5]" : "bg-primary",
                "p-[5px] rounded-full"
              )}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            >
              <SlideLeft className="text-white" />
            </button>
            <button
              className={clsx(
                isEnd ? "bg-[#D5D5D5]" : "bg-primary",
                "p-[5px]  rounded-full"
              )}
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            >
              <SlideLeft className="rotate-180 text-white" />
            </button>
          </div>
          <Link
            href={"/talks/all"}
            className="bg-primary px-[18px] py-[9px] rounded-full text-white font-pop text-xs font-normal leading-normal"
          >
            See All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-[16px]">
        <Swiper
          className="w-full"
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {isForm ? (
            form.map((item, index) => (
              <SwiperSlide key={`${item}-${index}`}>
                <CardReport
                  profile="profile.svg"
                  name={item.fullname}
                  hours={item.datecreated}
                  status={item.status}
                  type={item.type}
                  to={item.to}
                  title={item.title}
                  desc={item.message}
                  tag={item.tags}
                  agree={item.like}
                  disagree={item.dislike}
                  discussion={item.reply}
                  images="profile.svg"
                  formId={item._id}
                  href={`/talks/${item.type.toLowerCase()}/${item._id}`}
                />
              </SwiperSlide>
            ))
          ) : (
            <div></div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTalks;
