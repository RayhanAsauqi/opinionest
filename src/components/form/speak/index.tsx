import React from "react";
import Input from "@/components/app/Input/index";
import DropDown from "@/components/app/Dropdown";

function FormSpeak() {
  const TypeTes = [
    { name: "Type Tes 1" },
    { name: "Type Tes 2" },
    { name: "Type Tes 3" },
    { name: "Type Tes 4" },
    { name: "Type Tes 5" },
    { name: "Type Tes 6" },
  ];
  return (
    <div className="border p-5 rounded-[20px]">
      <div className="grid grid-cols-3 items-center gap-5">
        <Input
          type="text"
          placeholder="gimme a title"
          className="block border border-[#D5D5D5] w-full px-5 py-[18px]  rounded-[10px]  sm:text-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none "
          label="Title"
          labelClassName="text-base font-normal leading-normal"
        />
        <DropDown
          item={TypeTes}
          buttonStyle=" border rounded px-5 py-[18px]  rounded-[10px] w-full "
          title="choose type"
          src="/arrowDropDown.svg"
          width={24}
          height={24}
          label="type"
        />
        <DropDown
          item={TypeTes}
          buttonStyle=" border rounded px-5 py-[18px] rounded-[10px] w-full "
          title="choose type"
          src="/arrowDropDown.svg"
          width={24}
          height={24}
          label="type"
        />
      </div>
    </div>
  );
}

export default FormSpeak;
