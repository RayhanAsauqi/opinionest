import React from "react";
import AppButton from "@/components/app/Button";
import Link from "next/link";
import FormSpeak from "@/components/form/speak";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArrowLeft from "../../../../public/icons/arrowLeft";

function room() {
  return (
    <div>
      <Navbar />
      <section className="px-[104px] pt-[60px]">
        <div className="flex items-center gap-[267px] pb-[23px]">
          <Link
            href="/"
            className="flex flex-row items-center gap-[4px] bg-[#E2F5FF] rounded-[4px] p-[10px] text-primary font-pop text-[10px] font-normal leading-normal"
          >
            <span>
              <ArrowLeft />
            </span>
            Back to home
          </Link>
          <h1 className="text-black font-pop text-[24px] font-medium leading-[170%]">
            Go ahead and say what you want to say
          </h1>
        </div>
        <FormSpeak />
      </section>
      <Footer />
    </div>
  );
}

export default room;
