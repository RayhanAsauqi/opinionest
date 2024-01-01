"use client";
import React from "react";
import Image from "next/image";

function AppButton(props: { title: string; className?: string; src?: string; alt?: string; width?: number; height?: number; isSpeakView?: boolean; textStyles?: string; prefixIcon?: string; suffixIcon?: string; onClick: () => void }) {
	const handle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		props.onClick();
	};
	if (props.isSpeakView && props.title) {
		return (
			<>
				<button className={props.className} onClick={handle}>
					{props.prefixIcon && <Image src={props.prefixIcon} alt={props.alt || ""} width={props.width} height={props.height} />}
					<span className={props.textStyles}>{props.title}</span>
					{props.suffixIcon && <Image src={props.suffixIcon} alt={props.alt || ""} width={props.width} height={props.height} />}
				</button>
			</>
		);
	}
	return null;
}

export default AppButton;
