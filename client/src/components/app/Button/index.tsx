"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  href?: string;
  onClick?: () => void;
}) {
  const handle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick();
    }
  };
  if (props.isSpeakView && props.title) {
    return (
      <>
        {props.href ? (
          <Link className={props.className} href={props.href}>
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
          </Link>
        ) : (
          <button className={props.className} onClick={handle}>
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
        )}
      </>
    );
  }
  return null;
}

export default AppButton;
