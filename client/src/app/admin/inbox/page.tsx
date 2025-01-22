"use client";
import CardReport from "@/components/CardReport/Index";
import FilterTo from "@/components/FIlterTo/Index";
import Search from "@/components/Search/Index";
import SidebarAdmin from "@/components/SidebarAdmin/Index";
import SortByDrop from "@/components/SortByDrop/Index";
import Topbar from "@/components/Topbar/Index";
import { useState } from "react";

export default function Inbox() {
  const [critiqActive, setCritiqActive] = useState(true);
  const [reportActive, setReportActive] = useState(false);
  return (
    <div>
      <SidebarAdmin activeMenu="inbox" />
      <Topbar title="Inbox" />
      <div className="ml-[256px] mt-[24px] px-[40px] pb-[83px]">
        <div className="grid grid-cols-2 gap-[24px]">
          <button
            className={`${
              critiqActive ? "text-white bg-primary" : "text-black bg-white"
            } border-[1px] border-[#D5D5D5] rounded-[6px] py-[16px]  font-pop text-[16px] font-normal leading-[170%]`}
            onClick={() => {
              setCritiqActive(true);
              setReportActive(false);
            }}
          >
            Critique
          </button>
          <button
            className={`${
              reportActive ? "text-white bg-primary" : "text-black bg-white"
            } border-[1px] border-[#D5D5D5] rounded-[6px] py-[16px]  font-pop text-[16px] font-normal leading-[170%]`}
            onClick={() => {
              setCritiqActive(false);
              setReportActive(true);
            }}
          >
            Reports
          </button>
        </div>
        <hr className="w-full h-[1px] bg-[#D5D5D5] my-[40px]" />
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="col-span-2">
            <Search />
          </div>
          <div className="flex flex-row items-start gap-[8px]">
            <p className="text-black font-pop text-[16px] font-normal leading-[170%] w-[60px]">
              filter:{" "}
            </p>
            <FilterTo />
          </div>
          <div className="flex flex-row items-start gap-[8px]">
            <p className="text-black font-pop text-[16px] font-normal leading-[170%] w-[90px]">
              sort by:
            </p>
            <SortByDrop />
          </div>
        </div>

        <div className="flex flex-col mt-[24px]">
          <CardReport
            profile="profile.svg"
            name="Reza Arif Maulana"
            hours="2 Hours a go"
            status="Open"
            type="report"
            to="Direktorat TSI"
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
            images="profile.svg"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
