import React from "react";
import AppButton from "@/components/app/Button";
import Link from "next/link";
import FormSpeak from "@/components/form/speak";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArrowLeft from "../../../../public/icons/arrowLeft";
import { IoHelpCircleOutline } from "react-icons/io5";

function room() {
  return (
    <div>
      <Navbar />
      <section className="px-[104px] pt-[60px]">
        <div className="grid grid-cols-4 pb-[23px]">
          <div className="flex">
            <Link
              href="/"
              className="flex flex-row items-center gap-[4px] bg-[#E2F5FF] rounded-[4px] p-[10px] text-primary font-pop text-sm font-normal leading-normal"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to home
            </Link>
          </div>
          <div className="text-black col-span-2 text-center font-pop text-[24px] font-medium leading-[170%]">
            Go ahead and say what you want to say
          </div>
          <div className="flex justify-end">
            <button>
              <IoHelpCircleOutline className="w-6 h-6" />
            </button>
          </div>
        </div>
        <FormSpeak />
      </section>
      <Footer />
    </div>
  );
}

export default room;
