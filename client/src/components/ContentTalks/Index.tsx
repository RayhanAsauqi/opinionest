"use client";
import { useRef, useState, useEffect, MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideLeft from "../../../public/icons/slideLeft";
import CardReport from "../CardReport/Index";
import Search from "../Search/Index";
import axios from "axios";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import clsx from "clsx";
import SwiperTalks from "../swiper-talks";

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

export default function ContentTalks() {
  const swiperRef = useRef<SwiperType | null>(
    null
  ) as MutableRefObject<SwiperType | null>;
  const [form, setForm] = useState<Item[]>([]);
  const [isForm, setIsForm] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const request = "halo";
  useEffect(() => {
    async function getForm() {
      const fetchForm = await axios.post("http://localhost:3001/getform", {
        request,
      });

      if (fetchForm.data != false) {
        setForm(fetchForm.data);
        setIsForm(true);
      } else {
        setIsForm(false);
      }
    }
    getForm();
  }, [request]);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };
  return (
    <div className="flex flex-col w-full">
      <Search />

      {/* Latest Talks */}
      <SwiperTalks title="Latest Talks" form={form} isForm={isForm} />

      {/* Popular Talks */}
      <SwiperTalks title="Popular Talks" form={form} isForm={isForm} />
    </div>
  );
}
