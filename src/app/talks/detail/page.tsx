import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CardDetail from "@/components/CardDetail/Index";
import ArrowLeft from "../../../../public/icons/arrowLeft";
import CardChat from "@/components/CardChat/Index";
import Image from "next/image";
import CardComment from "@/components/CardComment/Index";

export default function Detail() {
  return (
    <div>
      <Navbar />
      <div className="px-[104px] flex flex-col mt-[60px]">
        <Link
          href="/"
          className="flex flex-row w-[100px] items-center gap-[4px] bg-[#E2F5FF] rounded-[4px] p-[10px] text-primary font-pop text-[10px] font-normal leading-normal"
        >
          <span>
            <ArrowLeft />
          </span>
          Back to talks
        </Link>
        <div className="flex flex-col mt-[24px]">
          <CardDetail
            profile="profile.svg"
            name="Reza Arif Maulana"
            hours="2 Hours a go"
            type="report"
            to="Direktorat TSI"
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
            images="profile.svg"
            href="/"
            className="hidden"
          />
        </div>
        <div className="mt-[16px]">
          <CardChat />
        </div>
        <div className="flex flex-col mt-[24px]">
          <h3 className="text-black font-pop text-[24px] font-medium leading-normal">
            Replies/Discussion
          </h3>
          <div className="flex flex-col mt-[24px]">
            <div className="border-[1px] border-[#D5D5D5] rounded-[10px] shadow-sidebar p-[20px] divide-y-2 divide-[#D5D5D5]">
              <CardComment
                profile="profile.svg"
                name="Reza Arif Maulana"
                hours="2 minutes ago"
                comment="Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas"
                href="/"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
