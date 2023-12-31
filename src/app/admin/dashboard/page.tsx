import CardDashboard from "@/components/CardDashboard/Index";
import SidebarAdmin from "@/components/SidebarAdmin/Index";
import Topbar from "@/components/Topbar/Index";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <SidebarAdmin activeMenu="homepage" />
      <Topbar title="Dashboard" />
      <div className="ml-[256px] mt-[24px] px-[40px] pb-[83px]">
        <div className="grid grid-cols-1 mt-[40px] bg-[#E2F5FF] px-[40px] py-[45px] rounded-[10px]">
          <h3 className="text-primary font-poppins text-[40px] font-normal leading-[130%]">
            Welcome, Directorate TSI 👋
          </h3>
          <p className="text-secondary font-poppins text-[16px] font-normal leading-[170%] mt-[16px]">
            Have a nice day! Is there anything we can help you with today?
          </p>
        </div>
        <div className="grid grid-cols-3 mt-[24px] gap-[40px]">
          <CardDashboard title="Speak" num="60" desc="received" />
          <CardDashboard title="Critique" num="43" desc="included" />
          <CardDashboard title="Report" num="17" desc="included" />
        </div>
        <div className="grid grid-rows-1 mt-[24px]">
          <Image
            src={"/svgs/statistic.svg"}
            width={1104}
            height={204}
            alt="st"
            className="w-full"
          />
        </div>
        <div className="grid grid-rows-1 mt-[24px]">
          <Image
            src={"/svgs/report.svg"}
            width={1104}
            height={204}
            alt="st"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
