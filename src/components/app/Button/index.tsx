import React from "react";
import Image from "next/image";

function AppButton(props: {
  title: string;
  className: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <>
      <button className={props.className}>
        <h1 className="">{props.title}</h1>
        <Image
          src={props.src || ""}
          alt={props.alt || ""}
          width={props.width}
          height={props.height}
        />
      </button>
    </>
  );
}

export default AppButton;
