import React from "react";

export default function SortBy() {
  return (
    <div className="bg-white w-[400px] border-[1px] border-[#F8F8F8] shadow-sidebar p-[20px] flex flex-col gap-[8px] h-[140px]">
      <h3 className="text-black font-pop text-[14px] font-normal leading-normal">
        Sort by
      </h3>
      <div className="flex flex-col gap-[4px]">
        <div className="flex flex-row items-center gap-[8px]">
          <input
            type="checkbox"
            className="checkbox rounded-full border-primary border w-[16px] h-[16px]"
          />
          <p className="text-komen font-pop text-[12px] font-normal leading-[170%]">
            Date
          </p>
        </div>
        <div className="flex flex-row items-center gap-[8px]">
          <input
            type="checkbox"
            className="checkbox rounded-full border-primary border w-[16px] h-[16px]"
          />
          <p className="text-komen font-pop text-[12px] font-normal leading-[170%]">
            Target
          </p>
        </div>
      </div>
    </div>
  );
}
