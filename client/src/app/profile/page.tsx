"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import EditImage from "../../../public/icons/edit-image";
import CardReport from "@/components/CardReport/Index";
import SortBy from "@/components/SortBy/Index";
import { useState } from "react";
import CardType from "@/components/card-type";
import Link from "next/link";

export default function Profile() {
  const [activeType, setActiveType] = useState("all");

  // Dummy data
  const allData = [
    {
      type: "report",
      profile: "profile.svg",
      name: "Reza Arif Maulana",
      hours: "2 Hours ago",
      status: "Open" as "Open" | "Close",
      to: "Direktorat TSI",
      title: "Report Title",
      desc: "Description for Report",
      images: "profile.svg",
      href: "/",
    },
    {
      type: "critique",
      profile: "profile.svg",
      name: "Reza Arif Maulana",
      hours: "3 Hours ago",
      status: "Open" as "Open" | "Close",
      to: "Direktorat TSI",
      title: "Critique Title",
      desc: "Description for Critique",
      images: "profile.svg",
      href: "/",
    },
    {
      type: "aspiration",
      profile: "profile.svg",
      name: "Reza Arif Maulana",
      hours: "4 Hours ago",
      status: "Close" as "Open" | "Close",
      to: "Direktorat TSI",
      title: "Aspiration Title",
      desc: "Description for Aspiration",
      images: "profile.svg",
      href: "/",
    },
  ];

  // Filter data based on activeType
  const filteredData =
    activeType === "all"
      ? allData
      : allData.filter((item) => item.type === activeType);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-[104px] mt-[40px]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-start gap-[24px]">
            <Image
              src={"/images/profile-pict.png"}
              width={200}
              height={200}
              alt="profile"
              className="w-[200px] rounded-[10px] object-cover"
            />
            <div className="flex flex-col">
              <p className="text-black font-pop text-[24px] font-medium leading-normal">
                Reza Arif Maulana
              </p>
              <p className="text-komen font-pop text-[16px] font-normal leading-normal">
                @rezrfm
              </p>
              <Link
                href={"/profile/account-setting"}
                className="bg-[#E2F5FF] w-[143px] rounded-[4px] p-[4px] flex flex-row gap-[8px] text-secondary font-pop text-[10px] font-normal leading-[170%] mt-[8px]"
              >
                <EditImage />
                Change Profile Image
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-[20px]">
            <CardType type="Speaks" count={20} description="was created" />
            <CardType type="Critique" count={14} description="Including" />
            <CardType type="Aspiration" count={6} description="Including" />
            <CardType type="Report" count={8} description="Including" />
          </div>
        </div>
        <hr className="w-full h-[1.5px] bg-[#D5D5D5] mt-[40px] " />
        <div className="grid grid-cols-12 gap-4 mt-[40px]">
          <div className="w-full col-span-2">
            <SortBy />
          </div>
          <div className="col-span-10 flex flex-col">
            <div className="flex flex-row items-center gap-[16px]">
              <button
                className={`${
                  activeType === "all"
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => setActiveType("all")}
              >
                All Speaks
              </button>
              <button
                className={`${
                  activeType === "critique"
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => setActiveType("critique")}
              >
                Critiques
              </button>
              <button
                className={`${
                  activeType === "aspiration"
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => setActiveType("aspiration")}
              >
                Aspirations
              </button>
              <button
                className={`${
                  activeType === "report"
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => setActiveType("report")}
              >
                Reports
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-[24px]">
              {filteredData.map((item, index) => (
                <CardReport
                  key={index}
                  profile={item.profile}
                  name={item.name}
                  hours={item.hours}
                  status={item.status}
                  type={item.type}
                  to={item.to}
                  title={item.title}
                  desc={item.desc}
                  images={item.images}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
