import React from "react";

interface CardFeaturesProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function CardFeatures(props: CardFeaturesProps) {
  const { icon, title, desc } = props;
  return (
    <div className="border-[1px] border-[#D5D5D5] rounded-[12px] bg-white flex flex-col h-[400px] p-[40px] hover:border-primary hover:shadow-features">
      <div className="bg-primary w-[80px] p-[24px] rounded-full">{icon}</div>
      <div className="flex flex-col mt-[24px]">
        <h3 className="text-secondary font-pop text-[20px] font-semibold leading-normal">
          {title}
        </h3>
        <p className="text-[#737373] font-pop text-[16px] font-normal leading-normal mt-[16px]">
          {desc}
        </p>
      </div>
    </div>
  );
}
