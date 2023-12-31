"use client";
import ButtonDown from "@/components/ButtonDown/Index";
import { useState } from "react";
import ArrowBlue from "../../../public/icons/arrowBlue";

export default function FilterTipe() {
  const [selectedTipe, setSelectedTipe] = useState("Report");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTipeClick = (tipe: string) => {
    setSelectedTipe(tipe);
    setIsOpen(false);
  };
  return (
    <div className="relative w-full flex flex-col">
      <button
        className="border-[#D5D5D5] w-full border rounded-[10px] text-komen text-start font-pop text-[12px] font-normal leading-[170%] mt-[8px] focus:outline-none py-[10px] px-[10px]"
        onClick={toggleDropdown}
      >
        {selectedTipe}
      </button>
      <div className="pointer-events-none absolute inset-y-0 right-[10px] top-[10px] flex flex-row items-center pr-4">
        <ArrowBlue className="w-[16px] text-primary" />
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="w-full absolute mt-[55px] border border-[#D5D5D5] bg-white rounded-[10px] z-20 py-[10px] px-[10px] divide-y divide-[#D5D5D5]">
          <ButtonDown
            title="Critique"
            type="text"
            className="text-[12px]"
            onClick={() => handleTipeClick("Critique")}
          />
          <ButtonDown
            title="Report"
            type="text"
            className="text-[12px]"
            onClick={() => handleTipeClick("Report")}
          />
        </div>
      )}
    </div>
  );
}
