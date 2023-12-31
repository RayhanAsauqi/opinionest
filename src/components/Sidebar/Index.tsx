import React from "react";
import FilterTipe from "../FilterTipe/Index";
import FilterTo from "../FIlterTo/Index";
import Tags from "../Tags/Index";

interface SidebarProps {
  className?: string;
}

export default function Sidebar(props: SidebarProps) {
  const { className } = props;
  return (
    <aside className="w-[228px] sticky top-0">
      <button className="bg-primary w-full px-[32px] py-[18px] rounded-[6px] text-white font-pop text-[16px] font-normal leading-normal">
        Make a speak +
      </button>

      <div className="flex flex-col mt-[24px]  gap-[8px]">
        {/* Show  */}
        <div
          className={`bg-white border-[1px] border-[#F8F8F8] shadow-sidebar p-[20px] flex flex-col gap-[8px] ${className}`}
        >
          <h3 className="text-black font-pop text-[14px] font-normal leading-normal">
            Show
          </h3>
          <div className="flex flex-col gap-[4px]">
            <div className="flex flex-row items-center gap-[8px]">
              <input
                type="checkbox"
                className="checkbox rounded-full border-primary border w-[16px] h-[16px]"
              />
              <p className="text-komen font-pop text-[12px] font-normal leading-[170%]">
                Latest and Popular
              </p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <input
                type="checkbox"
                className="checkbox rounded-full border-primary border w-[16px] h-[16px]"
              />
              <p className="text-komen font-pop text-[12px] font-normal leading-[170%]">
                Latest
              </p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <input
                type="checkbox"
                className="checkbox rounded-full border-primary border w-[16px] h-[16px]"
              />
              <p className="text-komen font-pop text-[12px] font-normal leading-[170%]">
                Popular
              </p>
            </div>
          </div>
        </div>

        {/* Filter type */}
        <div className="bg-white border-[1px] border-[#F8F8F8] shadow-sidebar p-[20px] flex flex-col gap-[16px]">
          <div className="flex flex-col">
            <h3 className="text-black font-pop text-[14px] font-normal leading-[170%]">
              Filter by type
            </h3>
            <FilterTipe />
          </div>
          <hr className="bg-[#D5D5D5] w-full h-[1px]" />
          <div className="flex flex-col">
            <h3 className="text-black font-pop text-[14px] font-normal leading-[170%]">
              Filter by target
            </h3>
            <FilterTo />
          </div>
        </div>

        {/* Sort */}
        <div className="bg-white border-[1px] border-[#F8F8F8] shadow-sidebar p-[20px] flex flex-col gap-[8px]">
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
                Type
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

        {/* Tags */}
        <div className="bg-white border-[1px] border-[#F8F8F8] shadow-sidebar p-[20px] flex flex-col gap-[8px]">
          <h3 className="text-black font-pop text-[14px] font-normal leading-normal">
            Popular tags
          </h3>
          <Tags tags="lorem" />
        </div>
      </div>
    </aside>
  );
}
