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
        <label
          className="flex flex-col items-center justify-center w-full  border-2 border-gray-300  rounded-lg cursor-pointer "
        >
          <div className={props.iconPosition}>
            <Image
              id={props.id}
              src={props.src || ""}
              alt={props.alt || ""}
              width={props.width}
              height={props.height}
            />
          </div>
          <input  type="file" className="hidden " />
        </label>
      </div>
    </div>
  );
}

export default DropZone;
