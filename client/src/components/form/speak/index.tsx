"use client";
import React from "react";
import DropDown from "@/components/app/Tipe";
import DropZone from "@/components/app/DropZone/index";
import Link from "next/link";
import Tipe from "@/components/app/Tipe";
import InputTo from "@/components/InputTo/Index";
import { useEffect, useState } from "react";
import axios from "axios";

function FormSpeak() {
	const [title, setTitle] = useState("");
	const [tipe, setTipe] = useState("");
	const [to, setTo] = useState("");
	const [message, setMessage] = useState("");
	const [tags, setTags] = useState("");
	const [anonym, setAnonym] = useState(false);

	const handleTitle = (event: { target: { value: string } }) => {
		setTitle(event.target.value);
	};

	const handleAnonym = () => {
		setAnonym(!anonym);
	};

	const handleTipe = (option: any) => {
		setTipe(option);
	};

	const handleTo = (option: any) => {
		setTo(option);
	};

	const handleMessage = (event: { target: { value: string } }) => {
		setMessage(event.target.value);
	};

	const handleTags = (event: { target: { value: string } }) => {
		setTags(event.target.value);
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(title, tipe, to, message, tags, anonym);

		fetch("http://localhost:3001/sendform", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			mode: "cors",
			body: JSON.stringify({ title, tipe, to, message, tags, anonym }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data == true) {
					window.location.href = "http://localhost:3000/speak/form/success";
				} else {
					alert("Invalid login credential");
				}
			})
			.catch((error) => {
				console.error("Terjadi kesalahan:", error);
			});
	};

	return (
		<>
			<section className="pb-[60px]">
				<div className="border p-5 rounded-[20px]">
					<div className="grid grid-cols-3 items-center gap-5">
						<div>
							<label htmlFor="#" className="text-black font-pop text-[16px] font-normal leading-normal">
								Title <span className="text-[#F00]">*</span>
							</label>
							<input
								type="text"
								placeholder="Gimme a title"
								className="border-[#D5D5D5] w-full border rounded-[10px] text-[#737373] font-pop text-[16px] font-normal leading-normal mt-[8px] focus:outline-none py-[18px] px-[20px]"
								onChange={handleTitle}
							/>
						</div>
						<Tipe title="Tipe" onChange={handleTipe} />
						<InputTo title="To" onChange={handleTo} />
					</div>

					<div className="grid grid-cols-3 gap-4 mt-[16px]">
						<div className="col-span-2">
							<label htmlFor="message" className="text-black">
								Message <span className="text-[#F00]">*</span>
							</label>
							<textarea
								id="message"
								className="border-[1px] border-[#D5D5D5] rounded-[10px] grid w-full h-[366px] text-black font-pop text-[16px] font-normal leading-normal  outline-none  px-[20px] pt-[20px] mt-[8px]"
								placeholder="say it here"
								rows={14}
								onChange={handleMessage}
							/>
						</div>
						<div className="grid gap-[16px]">
							<div>
								<label htmlFor="foto">Foto</label>
								<DropZone id="vidio" src="/icons/speakForm/image.svg" alt="dashed vector sign in" width={24} height={24} iconPosition="py-[33px]" />
							</div>
							<div>
								<label htmlFor="vidio">Video</label>
								<DropZone id="vidio" src="/icons/speakForm/vidio.svg" alt="dashed vector sign in" width={24} height={24} iconPosition="py-[33px]" />
							</div>
							<div>
								<label htmlFor="tags">
									Tags <span className="text-[#F00]">*</span>
								</label>
								<input id="tags" type="text" className="input input-bordered w-full h-[90px] rounded text-[#737373] mt-[8px]" onChange={handleTags} />
							</div>
						</div>
					</div>
					<div className="grid grid-cols-5 pt-4 pb-5">
						<div className="w-[220px] flex flex-row justify-center items-center px-[23px] py-[18px] rounded-[10px] bg-[#E2F5FF] gap-[8px]">
							<input type="checkbox" className="checkbox rounded-none border-secondary border w-[14px] h-[14px]" checked={anonym} onChange={handleAnonym} />
							<h1 className="text-[#144B66] text-base font-normal leading-normal">Set to anonymous</h1>
						</div>
						<div className="col-span-4">
							<Link href="/speak/form/success">
								<button className="btn w-full py-[18px] btn-lg bg-[#00A9FF] text-white" onClick={handleSubmit}>
									<span className="text-white font-pop text-[16px] font-normal leading-normal">Send</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default FormSpeak;
