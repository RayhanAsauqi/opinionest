import React from "react";
import Notification from "../../../public/icons/notification";

interface TopbarProps {
  title: string;
}

export default function Topbar(props: TopbarProps) {
  const { title } = props;
  return (
    <div className="flex flex-row items-center bg-white border-b-[1px] border-[#D5D5D5] ml-[256px] pl-[40px] justify-between pr-[40px] py-[24px]">
      <h3 className="text-black font-pop text-[24px] font-normal leading-[170%]">
        {title}
      </h3>
      <button className="flex flex-row">
        <Notification className="w-[24px]" />
      </button>
    </div>
  );
}
