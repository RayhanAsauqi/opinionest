"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tags from "../Tags/Index";
import Discuss from "../../../public/icons/discuss";
import Like from "../../../public/icons/like";
import Dislike from "../../../public/icons/dislike";
import axios from "axios";

interface CardReportProps {
	profile: string;
	name: string;
	hours: string;
	status?: string;
	type: string;
	to: string;
	title: string;
	desc: string;
	images: string;
	href: string;
	className?: string;
	tag: string;
	agree: string;
	disagree: string;
	discussion: string;
	formId: string;
}

export default function CardReport(props: CardReportProps) {
	var { profile, name, hours, status, type, to, title, desc, images, href, className, tag, agree, disagree, discussion, formId } = props;
	const [agreeClicked, setAgreeClicked] = useState(false);
	const [disagreeClicked, setDisagreeClicked] = useState(false);

	const agreeSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setAgreeClicked(true);
		setDisagreeClicked(false);

		const postLike = await axios.post("http://localhost:3001/postlike", { formId, agree });
	};

	const disagreeSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setDisagreeClicked(true);
		setAgreeClicked(false);

		const postDislike = await axios.post("http://localhost:3001/postdislike", { formId, disagree });
	};

	return (
		<div className="border-[1px] border-[#D5D5D5] bg-white rounded-[10px] px-[20px] py-[33px]">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center gap-[8px]">
					<Image src={`/images/${profile}`} width={28} height={28} alt="profile" className="w-[28px] rounded-full" />
					<div className="flex flex-row items-center gap-[4px]">
						<p className="text-black font-pop text-[16px] font-medium leading-normal">{name} •</p>
						<p className="text-komen font-pop text-[16px] font-normal leading-normal">{hours}</p>
					</div>
				</div>
				{status == null ? <div></div> : <p className={`border-[1px] border-[#BC8700] p-[10px] rounded-[6px] text-[#BC8700] font-pop text-[12px] font-normal leading-normal ${className}`}>{status}</p>}
			</div>
			<div className="flex flex-row items-center gap-[4px] mt-[18px]">
				<p className="border-[1px] border-komen px-[8px] py-[4px] rounded-[13px] text-komen font-pop text-[10px] font-normal leading-normal">type: {type}</p>
				<p className="border-[1px] border-komen px-[8px] py-[4px] rounded-[13px] text-komen font-pop text-[10px] font-normal leading-normal">to: {to}</p>
			</div>
			<h3 className="text-black font-pop text-[15px] font-medium leading-normal mt-[16px]">{title}</h3>
			<p className="text-komen font-pop text-[14px] font-normal leading-[26px] mt-[16px]">{desc}</p>

			<div className="flex flex-row items-center mt-[16px]">
				<Image src={`/images/${images}`} width={80} height={80} alt="thumb" className="w-[80px] rounded-[6px] bg-[#D5D5D5]" />
			</div>

			<div className="mt-[16px] flex flex-row items-center gap-[4px]">{tag == undefined ? <div></div> : tag.split(" ").map((item: any, index: number) => <Tags tags={item.trim()} />)}</div>

			<div className="flex flex-row items-center gap-[16px] mt-[16px]">
				<button className="flex flex-row items-center gap-[4px] text-komen font-pop text-[14px] font-normal leading-normal">
					<Discuss />
					<p>Discussion ({discussion})</p>
				</button>
				<button className={`flex flex-row items-center gap-[4px] font-pop text-[14px] font-normal leading-normal ${agreeClicked ? "text-primary" : "text-komen"}`} onClick={agreeSubmit}>
					<Like />
					Agree ({agree})
				</button>
				<button className={`flex flex-row items-center gap-[4px] font-pop text-[14px] font-normal leading-normal ${disagreeClicked ? "text-primary" : "text-komen"}`} onClick={disagreeSubmit}>
					<Dislike />
					Disagree ({disagree})
				</button>
			</div>
		</div>
	);
}
