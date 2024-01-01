import Image from "next/image";
import Arrow from "../../../public/icons/arrow";

interface CardDashboardProps {
  title: string;
  num: string;
  desc: string;
}

export default function CardDashboard(props: CardDashboardProps) {
  const { title, num, desc } = props;
  return (
    <div className="grid grid-cols-1 border-[1px] border-[#D5D5D5] py-[20px] px-[40px] rounded-[10px]">
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-pop text-[16px] font-normal leading-normal">
          {title}
        </p>
        <Arrow className="w-[24px] text-black" />
      </div>
      <div className="flex flex-row items-center mt-[16px] gap-[4px]">
        <h3 className="text-black font-poppins text-[64px] font-normal leading-normal">
          {num}
        </h3>
        <p className="text-black font-poppins text-[16px] font-normal leading-[170%]">
          {desc}
        </p>
      </div>
    </div>
  );
}
