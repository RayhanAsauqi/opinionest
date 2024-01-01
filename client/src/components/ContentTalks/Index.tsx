"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideLeft from "../../../public/icons/slideLeft";
import CardReport from "../CardReport/Index";
import Search from "../Search/Index";
import axios from "axios";

// Import Swiper styles
import "swiper/css";

interface Item {
	fullname: any;
	title: any;
	datecreate: any;
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
	const [form, setForm] = useState<Item[]>([]);
	const [isForm, setIsForm] = useState(false);
	const request = "halo";
	useEffect(() => {
		async function getForm() {
			const fetchForm = await axios.post("http://localhost:3001/getform", { request });

			if (fetchForm.data != false) {
				setForm(fetchForm.data);
				setIsForm(true);
			} else {
				setIsForm(false);
			}
		}
		getForm();
	}, [request]);
	return (
		<div className="flex flex-col w-full">
			<Search />

			{/* Latest Talks */}
			<div className="flex flex-col mt-[24px]">
				<div className="flex flex-row items-center justify-between">
					<h3 className="text-black font-pop text-[20px] font-medium leading-[170%]">Latest Talks</h3>
					<div className="flex flex-row items-center gap-[16px]">
						<div className="flex flex-row items-center gap-[4px]">
							<button className="bg-primary p-[5px] rounded-full">
								<SlideLeft className="text-white" />
							</button>
							<button className="bg-primary p-[5px] rounded-full">
								<SlideLeft className="rotate-180 text-white" />
							</button>
						</div>
						<button className="bg-primary px-[18px] py-[9px] rounded-full text-white font-pop text-[10px] font-normal leading-normal">See All</button>
					</div>
				</div>
				<div className="grid grid-cols-1 mt-[16px]">
					<Swiper className="mySwiper">
						{isForm ? (
							form.map((item, index) => (
								<SwiperSlide key={`${item}-${index}`}>
									<CardReport
										profile="profile.svg"
										name={item.fullname}
										hours={item.datecreate}
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
										href="/"
									/>
								</SwiperSlide>
							))
						) : (
							<div></div>
						)}
					</Swiper>
				</div>
			</div>

			{/* Popular Talks */}
			<div className="flex flex-col mt-[24px]">
				<div className="flex flex-row items-center justify-between">
					<h3 className="text-black font-pop text-[20px] font-medium leading-[170%]">Popular Talks</h3>
					<div className="flex flex-row items-center gap-[16px]">
						<div className="flex flex-row items-center gap-[4px]">
							<button className="bg-primary text-white p-[5px] rounded-full">
								<SlideLeft />
							</button>
							<button className="bg-primary text-white p-[5px] rounded-full">
								<SlideLeft className="rotate-180" />
							</button>
						</div>
						<button className="bg-primary px-[18px] py-[9px] rounded-full text-white font-pop text-[10px] font-normal leading-normal">See All</button>
					</div>
				</div>
				<div className="grid grid-cols-1 mt-[16px]">
					<Swiper className="mySwiper">
						{isForm ? (
							form.map((item, index) => (
								<SwiperSlide key={`${item}-${index}`}>
									<CardReport
										profile="profile.svg"
										name={item.fullname}
										hours={item.datecreate}
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
										href="/"
									/>
								</SwiperSlide>
							))
						) : (
							<div></div>
						)}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
