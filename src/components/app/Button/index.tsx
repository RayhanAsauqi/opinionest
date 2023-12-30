import React from "react";
import Image from "next/image";

function AppButton(props: {
  title: string;
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  isSpeakView?: boolean;
  textStyles?: string;
  prefixIcon?: string;
  suffixIcon?: string;
}) {
  if (props.isSpeakView && props.title) {
    return (
      <>

        <button className={props.className}>
          {props.prefixIcon && (
            <Image
              src={props.prefixIcon}
              alt={props.alt || ""}
              width={props.width}
              height={props.height}
            />
          )}
          <span className={props.textStyles}>{props.title}</span>
          {props.suffixIcon && (
            <Image
              src={props.suffixIcon}
              alt={props.alt || ""}
              width={props.width}
              height={props.height}
            />
          )}
        </button>
      </>
    );
  }
  return null;
}

export default AppButton;
