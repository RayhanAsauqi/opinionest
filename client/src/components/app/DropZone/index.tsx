import React from "react";
import Image from "next/image";
function DropZone(props: {
  id?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  iconPosition?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center border-[1px] border-[#D5D5D5] rounded-[10px] w-full  text-black font-pop text-[16px] font-normal leading-normal  outline-none  px-[20px] mt-[8px] cursor-pointer">
          <div className={props.iconPosition}>
            <Image
              id={props.id}
              src={props.src || ""}
              alt={props.alt || ""}
              width={props.width}
              height={props.height}
            />
          </div>
          <input type="file" className="hidden " />
        </label>
      </div>
    </div>
  );
}

export default DropZone;
