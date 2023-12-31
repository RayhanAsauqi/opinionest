"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import EditImage from "../../../public/icons/edit-image";
import CardReport from "@/components/CardReport/Index";
import SortBy from "@/components/SortBy/Index";
import { useState } from "react";

export default function Profile() {
  const [allClicked, setAllClicked] = useState(true);
  const [reportClicked, setReportClicked] = useState(false);
  const [critiqueClicked, setCritiqueClicked] = useState(false);
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
              className="w-[200px] rounded-[10px]"
            />
            <div className="flex flex-col">
              <p className="text-black font-pop text-[24px] font-medium leading-normal">
                Reza Arif Maulana
              </p>
              <p className="text-komen font-pop text-[16px] font-normal leading-normal">
                @rezrfm
              </p>
              <button className="bg-[#E2F5FF] w-[143px] rounded-[4px] p-[4px] flex flex-row gap-[8px] text-secondary font-pop text-[10px] font-normal leading-[170%] mt-[8px]">
                <EditImage />
                Change Profile Image
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <div className="bg-[#E2F5FF] w-[200px] py-[20px] flex flex-col justify-center items-center rounded-[10px]">
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                Speaks
              </p>
              <p className="text-secondary font-pop text-[64px] font-normal leading-[170%]">
                20
              </p>
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                was created
              </p>
            </div>
            <div className="bg-[#E2F5FF] w-[200px] py-[20px] flex flex-col justify-center items-center rounded-[10px]">
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                Critique
              </p>
              <p className="text-secondary font-pop text-[64px] font-normal leading-[170%]">
                14
              </p>
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                Including
              </p>
            </div>
            <div className="bg-[#E2F5FF] w-[200px] py-[20px] flex flex-col justify-center items-center rounded-[10px]">
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                Report
              </p>
              <p className="text-secondary font-pop text-[64px] font-normal leading-[170%]">
                8
              </p>
              <p className="text-secondary font-pop text-[16px] font-normal leading-[170%]">
                Including
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1.5px] bg-[#D5D5D5] mt-[40px] " />
        <div className="flex flex-row mt-[40px] gap-[16px]">
          <SortBy />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-[16px]">
              <button
                className={`${
                  allClicked
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => {
                  setAllClicked(true);
                  setCritiqueClicked(false);
                  setReportClicked(false);
                }}
              >
                All Speaks
              </button>
              <button
                className={`${
                  reportClicked
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => {
                  setAllClicked(false);
                  setReportClicked(true);
                  setCritiqueClicked(false);
                }}
              >
                Reports
              </button>
              <button
                className={`${
                  critiqueClicked
                    ? "text-primary border-b-[1px] border-primary pb-[8px]"
                    : "text-komen"
                } font-pop text-[16px] font-normal leading-normal`}
                onClick={() => {
                  setAllClicked(false);
                  setReportClicked(false);
                  setCritiqueClicked(true);
                }}
              >
                Critiques
              </button>
            </div>
            <div className="flex flex-col mt-[24px]">
              <CardReport
                profile="profile.svg"
                name="Reza Arif Maulana"
                hours="2 Hours a go"
                status="waiting to be resolved"
                type="report"
                to="Direktorat TSI"
                title="Lorem ipsum dolor sit amet"
                desc="Lorem ipsum dolor sit amet. Est dolorem aliquam sit earum enim cum consectetur nisi quo tempore odit aut sunt sunt ut expedita magni? Aut eaque omnis et autem explicabo sed quia maiores non magni odit. Non perspiciatis architecto rem dolor vitae a accusamus minus et eaque sint. A autem voluptas non reiciendis rerum et perspiciatis rerum est dolorem neque!"
                images="profile.svg"
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
