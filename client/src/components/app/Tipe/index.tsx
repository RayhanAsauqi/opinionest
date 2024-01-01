"use client";
import ButtonDown from "@/components/ButtonDown/Index";
import { useState } from "react";

interface TipeProps {
	title?: string;
	onChange: (value: string) => void;
}

export default function Tipe(props: TipeProps) {
	const { title, onChange } = props;
	const [selectedOption, setSelectedOption] = useState("Choose type");
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
		onChange(option);
	};
	return (
		<div className="relative w-full flex flex-col">
			<label htmlFor="#" className="text-black font-pop text-[16px] font-normal leading-normal">
				{title} <span className="text-[#F00]">*</span>
			</label>
			<button className="border-[#D5D5D5] w-full border rounded-[10px] text-komen text-start font-pop text-[16px] font-normal leading-normal mt-[8px] focus:outline-none py-[18px] px-[20px]" onClick={toggleDropdown}>
				{selectedOption}
			</button>
			<div className="pointer-events-none absolute inset-y-0 right-[20px] top-[30px] flex items-center pr-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7L12 13L18 7L20 9L12 17L4 9L6 7Z" fill="#00A9FF" />
				</svg>
			</div>

			{/* Dropdown Content */}
			{isOpen && (
				<div className="w-full absolute mt-[100px] border border-[#D5D5D5] bg-white rounded-[10px] z-20 py-[10px] px-[10px] divide-y divide-[#D5D5D5]">
					<ButtonDown title="Critique" type="text" className="text-[16px]" onClick={() => handleOptionClick("Critique")} />
					<ButtonDown title="Report" type="text" className="text-[16px]" onClick={() => handleOptionClick("Report")} />
				</div>
			)}
		</div>
	);
}
