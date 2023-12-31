"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Discuss from "../../../public/icons/discuss";
import Like from "../../../public/icons/like";
import Dislike from "../../../public/icons/dislike";

interface CardCommentProps {
  profile: string;
  name: string;
  hours: string;
  comment: string;
  href: string;
}

export default function CardComment(props: CardCommentProps) {
  const { profile, name, hours, comment, href } = props;
  const [agreeClicked, setAgreeClicked] = useState(false);
  const [disagreeClicked, setDisagreeClicked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-[8px]">
        <Image
          src={`/images/${profile}`}
          width={28}
          height={28}
          alt="profile"
          className="w-[28px] rounded-full"
        />
        <div className="flex flex-row items-center gap-[4px]">
          <p className="text-black font-pop text-[16px] font-medium leading-normal">
            {name}
          </p>
          <p className="text-komen font-pop text-[16px] font-normal leading-normal">
            {hours}
          </p>
        </div>
      </div>
      <p className="text-komen font-pop text-[16px] font-normal leading-normal mt-[18px] pl-[36px]">
        {comment}
      </p>
      <div className="flex flex-row items-center gap-[16px] mt-[16px] pl-[36px]">
        <Link
          href={href}
          className="flex flex-row items-center gap-[4px] text-komen font-pop text-[14px] font-normal leading-normal"
        >
          <Discuss />
          <p>Discussion (44)</p>
        </Link>
        <button
          className={`flex flex-row items-center gap-[4px] font-pop text-[14px] font-normal leading-normal ${
            agreeClicked ? "text-primary" : "text-komen"
          }`}
          onClick={() => {
            setAgreeClicked(true);
            setDisagreeClicked(false);
          }}
        >
          <Like />
          Agree (114)
        </button>
        <button
          className={`flex flex-row items-center gap-[4px] font-pop text-[14px] font-normal leading-normal ${
            disagreeClicked ? "text-primary" : "text-komen"
          }`}
          onClick={() => {
            setDisagreeClicked(true);
            setAgreeClicked(false);
          }}
        >
          <Dislike />
          Agree (114)
        </button>
      </div>
    </div>
  );
}
