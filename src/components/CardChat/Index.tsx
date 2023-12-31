import Image from "next/image";
import React from "react";

export default function CardChat() {
  return (
    <div className="border-[1px] border-[#D5D5D5] flex flex-col rounded-[10px] p-[20px]">
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src={`/images/profile.svg`}
          width={28}
          height={28}
          alt="profile"
          className="w-[28px] rounded-full"
        />
        <div className="flex flex-row items-center gap-[4px]">
          <p className="text-black font-pop text-[16px] font-medium leading-normal">
            Reza Arif Maulana
          </p>
        </div>
      </div>
    </div>
  );
}
